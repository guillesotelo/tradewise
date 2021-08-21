const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken")
const transporter = require('../mailer')
const { Users } = require('../db/models')

// ---> /api/auth

const hashCode = cod => {
    let hash = cod * 98712
    return hash
}

//Register
router.post('/register', async (req, res, next) => {
    try {
        const { name, email, phone, password} = req.body
        if(!name || !email || !password || !phone) res.status(400).send('Invalid inputs')

        let user = await Users.findOne({ email }).exec()
        if(user) return res.status(409).send('Conflict: user already registered')

        const randCode = Math.floor(Math.random() * 1000000000)
        const VCode = hashCode(randCode)

        user = await Users.create({ name, email, phone, password, VCode})

        //Mailing
        transporter.sendMail({
            from: '"TradeWise" <appmailsenderinfo@gmail.com>',
            to: user.email,
            subject: 'Verification code',
            html: 
                `<h3> Welcome, ${user.name.split(' ')[0]}! <br/> 
                Please verify your account by login in with the code below:</h3> <br/>
                <h2>${randCode}</h2> <br/>
                <img width="350" height="200" src="https://i.postimg.cc/yNDV8L9H/tradewise-hq.png" alt="TradeWise"/>`
        }).catch(() => res.status(400).json({ message: 'Something went wrong!' }))

        res.status(200).json({ user: { ...user._doc, password: null, VCode: null, isVerified: null }})

    } catch(err) { next(err) }
})

//Login
router.post('/login', async (req, res, next) => {
    try {
        const { email, password, code } = req.body

        if(!email || !password) res.status(400).send('Invalid inputs')

        const user = await Users.findOne({ email }).exec()
        if(!user) return res.status(401).send('Invalid credentials')

        const compareRes = await user.comparePassword(password)
        if(!compareRes) return res.status(401).send('Invalid credentials')

        const compareCode = await user.VCode === hashCode(code)
        if(!compareCode) return res.status(401).send('Invalid credentials')

        await Users.findOneAndUpdate(
            { email: email }, { isVerified: true } , { new: true }
        )

        const token = jwt.sign({ id: user.id }, 'tradewise')
        res.status(200).json({ user: { ...user._doc, password: null, VCode: null }, token })

    } catch(err) { next(err) }
})


//Logout
router.get("/logout", (req, res, next) => {
    req.user = null;
    res.status(200).json({});
  })

module.exports = router