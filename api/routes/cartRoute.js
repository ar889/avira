const Cart = require("../schemas/cartSchema");
const userAuth = require("../middleware/userAuth");

const router = require("express").Router();

router.post("/cart",userAuth ,async (req, res) => {
  const { name, productId, picture, price } = req.body;
  const newCartProduct = { name, productId, picture, price };
  const userCartObject = await Cart.findOne({ googleId: req.user.id });

  if (userCartObject) {
    userCartObject.items.push(newCartProduct);
    await userCartObject.save();
    let calculateAmount = 0;
    const arrayOfItems = userCartObject.items;
    for (const element of arrayOfItems) {
      calculateAmount += element.price;
    }
    userCartObject.totalAmount = calculateAmount;
    await userCartObject.save();
  } else {
    const cartDoc = Cart({
      googleId: req.user.id,
      items: {
        name,
        productId,
        picture,
        price,
      },
      totalAmount: 199,
    });
    await cartDoc.save();
  }
  res.send("successfully added");
});

router.get("/cart", userAuth,async (req, res) => {
  let cartObject = await Cart.findOne({ googleId: req.user.id });
 if(cartObject){
  if (cartObject.items.length !== 0 && cartObject.items.length !== null) {
    res.json({
      empty: false,
      cartProducts: cartObject.items,
      totalAmount: cartObject.totalAmount,
    });
  } else {
    res.json({ empty: true, message: "Your cart is empty." });
  }
 }else{
  res.json({ empty: true, message: "Your cart is empty." });
 }
});

router.delete("/cart/:id",userAuth ,async (req, res) => {
  let cartObject = await Cart.findOne({ googleId: req.user.id });
  
  let filteredObjectsAmount = cartObject.items.filter(
    (item) => item.productId == req.params['id']
  );
  let filteredObject = cartObject.items.filter(
    (item) => item.productId != req.params['id']
  );

  // setting data for database
  cartObject.items = filteredObject;
  cartObject.totalAmount=cartObject.totalAmount-filteredObjectsAmount[0].price
  await cartObject.save();

  //  sending response after condition that cart products in database empty or not
  if(cartObject){
    if (cartObject.items.length !== 0 && cartObject.items.length !== null) {
      res.json({
        empty: false,
        cartProducts: cartObject.items,
        totalAmount: cartObject.totalAmount,
      });
    } else {
      res.json({ empty: true, message: "Your cart is empty" });
    }
  }
});

module.exports = router;
