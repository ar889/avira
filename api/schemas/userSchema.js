const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    googleId: Number
    
})

const User = mongoose.model('User', userSchema)

module.exports=User