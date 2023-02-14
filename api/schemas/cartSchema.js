const mongoose = require('mongoose')
const cartSchema = mongoose.Schema({
    googleId: Number,
    items:[{name:String,productId:Number,picture:String,price:Number}],
    totalAmount:Number
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports=Cart