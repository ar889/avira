import React from "react";
import bg from "../images/login_bg.jpg";
import google from "../images/google.png";

const Login = () => {
  return (
    <div className="relative">
      <img className="w-screen h-screen absolute -z-10" src={bg} alt="" />
      <div className=" flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center lg:w-2/4 2xl:w-1/3 xsm:w-9/12 sm:w-3/5 w-11/12 bg-white my-5 h-5/6 rounded-xl">
          <h1 className="text-4xl  font-normal mb-16 ">Login</h1>
          <form className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col w-3/4">
              <label htmlFor="username">Username</label>
              <input
                className="mb-1 border-b border-slate-900 pb-1 outline-none"
                type="text"
                name="username"
                placeholder="Type your username"
              />
            </div>
            <div className="flex flex-col w-3/4">
              <label htmlFor="password">Password</label>
              <input
                className="mb-1 border-b border-slate-900 pb-1 outline-none"
                type="password"
                name="password"
                id="password"
                placeholder="Type your password"
              />
            </div>
            <input
              className="bg-green-600 text-white rounded py-2 my-3 w-3/4"
              type="submit"
              value="LOGIN"
            />
          </form>
          <div className="mt-10 mb-2">Log In | Sign Up </div>
          <hr className="border-b-0 border-slate-700 w-2/4" />
          {/* <a href={`${process.env.REACT_APP_API}/auth/google/`}> */}
            <button onClick={()=>{window.open(`${process.env.REACT_APP_API}/auth/google`,'_self')}}>
              <div className="flex justify-center items-center space-x-1 my-4 border border-black px-4 py-2 rounded hover:bg-slate-300 transition-all">
                <img className="w-8" src={google} alt="google" /> Continue with
                Google
              </div>
            </button>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
