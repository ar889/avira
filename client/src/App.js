import React, { useEffect, useState } from "react";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./store/userReducer";
const App = () => {

  const dispatch=useDispatch()
  const user = useSelector((state) => state.user.data);
// console.log(user)
  useEffect(() => {
    const isUser =async()=>{
     await dispatch(fetchUser());
    }
    isUser()
}, [])

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
