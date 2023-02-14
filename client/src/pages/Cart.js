import React, { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { deleteProducts, fetchProducts} from "../store/cartReducer";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const product = useSelector((state) => state.cart.value);
  const user = useSelector((state) => state.user.data);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  // function to remove item from cart
  const remove = async (id) => {
    await dispatch(deleteProducts(id));
  };

  // function for react stripe-checkout
  const onToken = (token) => {
    const cartProduct = { products:product.cartProducts,totalAmount:product.totalAmount};
    const body = { cartProduct, token };

    fetch(`${process.env.REACT_APP_API}/stripe/payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
      });
    });
  };

  useEffect(() => {
    dispatch(fetchProducts());
    if(!user.success){
      navigate('/login')
    }
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-center text-4xl font-bold ">Your Cart</h1>
      {product.empty && (
        <h4 className="text-center font-bold text-lg py-6">{product.message}</h4>
      )}
      <div className="flex items-center justify-center flex-wrap">
        {product.cartProducts?.map((item) => (
          <div
            className="flex flex-col justify-center items-center w-11/12 sm:w-5/12 md:w-60 my-3 rounded-md"
            key={item.productId }
          >
            <img className="w-40" src={item.picture} alt={item.title} />
            <h3 className="text-center">{item.name}</h3>
            <h5 className="font-medium">
              <span className="text-green-600">$</span>
              {item.price}
            </h5>
            <button
              className="bg-red-500 text-white px-5 py-1 my-1 rounded"
              onClick={() => {
                remove(item.productId);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
 {!product.empty &&  <div className="border border-slate-400 flex flex-col items-center justify-center py-6 ">
  <div className="border border-green-600 flex flex-col items-center justify-center p-6 rounded ">
        <h1 className="font-semibold text-2xl">Ckeckout</h1>
        <h4 className="py-2">Amount = <strong>${product.totalAmount}</strong></h4>
        <StripeCheckout
          token={onToken}
          name='Enter Your Info'
          shippingAddress
          stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
        />
      </div></div>}     
      <Footer empty={product.empty} />
    </div>
  );
};

export default Cart;
