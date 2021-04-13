
require('dotenv').config()
const express = require('express');
const app = express()
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SEND_GRID)

const Datastore = require('nedb');
const { response } = require('express');
const db = new Datastore(`${__dirname}/database.db`)

db.loadDatabase((err)=> {console.log(err)})

app.post('/rsvp', async (req, res)=>{
    const name = req.body.guestName
    const number = req.body.guestNumber
    const response = req.body.coming
    const msg = {
        to: 'amiracle@sherman.edu', // Change to your recipient
        from: 'alayna_miracle@outlook.com', // Change to your verified sender
        subject: `${name} has RSVP'd for your wedding`,
        html: `<h1 style="color: green;">Hey Alayna! ${name} has registered for your wedding. They have said about coming: ${response}! with a count of ${number} guests! </h1>`
      }
      sgMail
      .send(msg)
      .then(() => {
        console.log(msg)
      })
      .catch((error) => {
        console.error(error)
      })
    db.insert({ ...req.body, date: Date.now() }, (error, data)=>{
        if (error) { console.log(error) }    
    })
    res.redirect('/')
})

app.get('/rsvp', (req, res)=>{
    db.find({}).sort({ date: -1}).exec((error, data)=>{
        if (error) { console.log(error) }
        res.json(data)
        console.log(data)
    })
})

app.get('/', (req, res)=>{
    res.send('index.html')
})


console.log(process.env.SEND_GRID)

app.listen(process.env.PORT || 3000)

//   const sendCancelationEmail = () => {
//     sgMail.send({
//         to: 'test@gmail',
//         from: 'alayna_miracle@outlook.com',
//         subject: 'Sorry to see you go!',
//         text: `test.`
//     })
// }

// sendCancelationEmail();