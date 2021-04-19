
require('dotenv').config()
const express = require('express');
const app = express()
const mongoose = require('mongoose')
const db = require('./db')
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

const rsvpSchema = new mongoose.Schema({
  guestName: String,
  guestNumber: Number,
  coming: String
})

const Rsvp = mongoose.model('Rsvp', rsvpSchema);

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SEND_GRID)

app.post('/rsvp', async (req, res)=>{
  const saveRsvp = new Rsvp({ ...req.body })
    const msg = {
        to: 'amiracle@sherman.edu', // Change to your recipient
        from: 'alayna_miracle@outlook.com', // Change to your verified sender
        subject: `${req.body.guestName} has RSVP'd for your wedding`,
        html: `
        <div style="background: white; padding: 3rem .5rem">
        <p style="color: green; font: 2rem Arial, sans-serif;">Hey Alayna! ${req.body.guestName} has registered for your wedding. They have said about coming: ${req.body.coming}! with a count of ${req.body.guestNumber} guests! </p>
        </div>`
      }
      sgMail
      .send(msg)
      .then(() => {
        console.log(msg)
      })
      .catch((error) => {
        console.error(error)
      })

      try {
        await saveRsvp.save()
        res.redirect('/thank-you')
        
      } catch (error) {
        console.log(error)
      }
})

app.get('/rsvp', async (req, res)=>{
const data = await Rsvp.find({})
res.send(data)
})

app.get('/', (req, res)=>{
    res.send('index.html')
})
app.get('/thank-you', (req, res)=>{
  res.sendFile(`${__dirname}/public/thankyou.html`)
})



console.log(process.env.SEND_GRID)

app.listen(process.env.PORT || 5000, (error)=>{
  if (error) return console.log(error)
  console.log(`connected on ${5000}`)
})
