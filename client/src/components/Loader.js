import React from "react";
import spinner from "../images/loader.gif";
const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <img className="w-12" src={spinner} alt="" />
    </div>
  );
};

export default Loader;
