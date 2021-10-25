//Server
const express = require('express')
const app = express()
app.listen(process.env.PORT || 8000, (req, res)=>{
    console.log('Server Ready')
})

//CORS
const cors = require('cors')
app.use(cors())

//Body Parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Coneccion a MongodDB
require('dotenv').config()
const mongoose = require('mongoose')
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.chtxy.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`
mongoose.connect(uri)
.then(()=> console.log('Connected to MongoDB'))
.catch((e)=> console.log(e))

//Rutas
app.use('/api', require('./router/api'))