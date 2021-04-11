const express = require('express');
const app = express()
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const Datastore = require('nedb');
const db = new Datastore(`${__dirname}/database.db`)

db.loadDatabase((err)=> {console.log(err)})

app.post('/rsvp', (req, res)=>{
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


console.log(`${__dirname}/public`)

app.listen(process.env.PORT || 3000)