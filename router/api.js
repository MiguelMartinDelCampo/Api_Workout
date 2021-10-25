const express = require('express')
const router = express.Router()
const Ejercicio = require("../Models/ejercicio")

router.get('/list', async (req, res) => {
    try {
        const ejerciciosDB = await Ejercicio.find()
        res.json(ejerciciosDB)
    } catch (error) {
        res.json({error})
    }
    
})

router.post('/add', async (req, res) => {
    const body = req.body
    try {
        await Ejercicio.create(body)
        res.json({
            status: true
        })
    } catch (error) {
        res.json({error})
    }
})

module.exports = router