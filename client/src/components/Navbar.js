import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/avira_logo1.png";
import cart from "../images/cart.png";
import profile from "../images/profile.png";
import { requestLogout } from "../store/userReducer";
const Navbar = () => {
    const user = useSelector((state) => state.user.data);
    const alert = useSelector((state) => state.alert.addToCartAlert);
    const dispatch=  useDispatch()
    const navigate = useNavigate()

    
  const logout = ()=>{
    dispatch(requestLogout())
    navigate('/')
  }
  return (
    <div className="sticky top-0 shadow-lg">
      <nav className="bg-blue-100 w-screen flex items-center justify-between p-1   sm:pr-6">
      <div className="flex items-center justify-center">
        <Link to={'/'}><img className="w-16 xsm:w-24 sm:w-28 mr-3 " src={logo} alt="" /></Link>
        <div className="">
          <button className="text-xs xsm:text-sm sm:text-base mr-1 sm:mr-2"><Link to={'/'}>Home</Link></button>
          <button className="text-xs xsm:text-sm sm:text-base mr-1 sm:mr-2">Blog</button>
          <button className="text-xs xsm:text-sm sm:text-base mr-1 sm:mr-2">About us</button>
          <button className="text-xs xsm:text-sm sm:text-base mr-1 sm:mr-2">Contact</button>
        </div>
      </div>
      <div className="flex justify-center items-center">
      <button><Link to={user.success?'/cart':'/login'}><img className="w-6  sm:w-7" src={cart} alt="" /></Link></button><img className="w-5 mx-2 sm:w-6 rounded-full" src={user.success?user.user._json.picture:profile} alt="" />
      {user.success?<button onClick={()=>{logout()}}>Logout</button>:<Link to={"/login"}>Login</Link>}
      </div>
    </nav>
    {alert && <div className="absolute flex justify-center items-center w-screen  ">
        <h5 className="border border-black px-5 py-2 font-medium transition-all rounded bg-yellow-400 text-black">Added to cart</h5>
      </div>}
    </div>
  );
};

export default Navbar;
