const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ejercicioSchema = new Schema({
    title: String,
    description: String,
    img: String,
    leftColor: String,
    rightColor: String
})

const ejercicio = mongoose.model('Ejercicio', ejercicioSchema)

module.exports = ejercicio