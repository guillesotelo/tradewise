const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken")
const { Users } = require('../db/models')
const filterData = require('./utils/BackHandlers')

//---> /api/users

//Get user by ID
router.get('/', async (req, res, next) => {
    try {
        const { id } = req.user
        const user = await Users.findById(id).exec()
        if(!user) return res.status(400).send('No user found')

        res.status(200).json(user)

    } catch(err) { next(err) }
})

//Update user
router.post('/', async (req, res, next) => {
    try {
        let data = { 
            img,
            name,
            email,
            actualEmail,
            password,
            phone,
            personalDescription
            } = req.body
        // console.log("---> REQ BODY: ", req.body)
    data = filterData(data)
    const user = await Users.findOneAndUpdate(
        { email: actualEmail }, 
        data, 
        { new: true })
        
    if(!user) return res.status(400).send('No user found')
    res.status(200).json(user)

    } catch(err) { next(err) }
})

module.exports = router