const router = require("express").Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


router.post('/payment',(req,res)=>{
    const {cartProduct,token}=req.body
let productsName=''
for(const element in cartProduct.products){
  productsName +=element
}
   return stripe.customers
    .create({
      email: token.email,
    })
    .then((customer) => {
      // have access to the customer object
      return stripe.charges
        .create({
          customer: customer.id, // set the customer id
          address:token.card.address_line1,
          amount: cartProduct.totalAmount*100,
          currency: 'usd',
          description: 'One-time setup fee',
        })
    }).then(res=>{
      res.status(200).json(res)}).catch(err=>console.log(err))
})

module.exports = router;
