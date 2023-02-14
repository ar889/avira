import React from "react";
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
const Footer = ({empty}) => {
  return (
    <div>
      <div className={`mt-20 p-2 bg-slate-200 ${empty? 'fixed right-0 left-0 bottom-0':null}`}>
        <h1 className="text-5xl text-center md:text-left">Avira</h1>
        <div className="flex items-center justify-between flex-col md:flex-row space-y-5">
          <div>Shop your style to groom your personality.....</div>
          <div>
            <p>New Arrivals direct to your inbox</p>
            <div className="border-2 border-black rounded max-w-max">
              <input
                className="outline-none px-2 bg-slate-200"
                type="email"
                name="email"
                id=""
                placeholder="YOUR E-MAIL"
              />
              <button className="bg-green-200 p-1" type="reset">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <h3>FOLLOW US</h3>
            <div className="flex items-center justify-center">
              <button>
                <img className="w-8" src={linkedin} alt="" />
              </button>
              <button>
                <img className="w-8" src={facebook} alt="" />
              </button>
              <button>
                <img className="w-8" src={twitter} alt="" />
              </button>
            </div>
          </div>
        </div>
        <hr className="h-1 my-3 border-black" />
        <div className="text-center sm:flex sm:items-center sm:justify-evenly">
          <div className="w-screen sm:w-auto">
            <strong>©2023</strong> AVIRA. ALL RIGHTS RESEREVD
          </div>
          <div>
            <button className="mr-4">PRIVACY POLICY</button>
            <button>TERMS AND CONDITIONS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
