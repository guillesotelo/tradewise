const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    VCode: {
        type: Number,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    personalDescription: {
        type: String
    },
    phone: {
        type: String,
    },
    img: {
        type: String
    }
})

userSchema.pre('save', function (next) {
    const users = this
    if(this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (saltError, salt) {
            if(saltError) return next(saltError)
            else{
                bcrypt.hash(users.password, salt, function (hashError, hash) {
                    if(hashError) return next(hashError)
                    users.password = hash
                    next()
                })
            }
        })
    } else return next()
})

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password).then(res => res)
}

const Users = mongoose.model('Users', userSchema)

module.exports = Users