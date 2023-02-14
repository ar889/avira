import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendProducts } from "../store/cartReducer";
import { buttonclick } from "../store/loadingReducer";
import { fetchProducts } from "../store/productReducer";
import Loader from "./Loader";

const Products = () => {
  const [isLoading, setLoading] = useState(true);
  const [addToCartButton, setaddToCartButton] = useState([])
  const productList = useSelector((state) => state.product.data);
  const user = useSelector((state) => state.user.data);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  
  const add =(product)=>{

    dispatch(buttonclick(true))
setTimeout(() => {
  dispatch(buttonclick(false))

}, 4000);

    if(user.success){
      dispatch(sendProducts(product))
      setaddToCartButton(product.id)
    }else{
      navigate('/login')
    }
    

  }
  useEffect(() => {
    const fetchProductList = async () => {
      await dispatch(fetchProducts());
      setLoading(false)
     
    };
    fetchProductList();
  }, []);

  // Created seperate product Component or product card
  const Product = () => {
    return (
      <div className="flex justify-center items-start flex-wrap ">
        {productList?.map((product) => (
          <div
            className="flex flex-col justify-center items-center w-11/12 sm:w-5/12 md:w-60 my-3 rounded-md"
            key={product.id}
          >
            <img className="w-40" src={product.image} alt={product.title} />
            <h3 className="text-center">{product.title}</h3>
            <h5 className="font-medium">
              <span className="text-green-600">$</span>
              {product.price}
            </h5>
            <button
              className="bg-blue-800 text-white px-5 py-1 my-1 rounded"
              onClick={() => add(product)}
            >
Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div id="products">
      <h1 className="text-center font-semibold text-3xl my-5">Products</h1>
      {isLoading ? <Loader /> : <Product />}
    </div>
  );
};

export default Products;
