import React from "react";
import Ybutton from "../../constant/Ybutton";

function header() {
  return (
    <div className="flex justify-between bg-black">
      <div>
        <img src="/logo white.jpg" alt="logo " className="w-16"/>
      </div>
      <div className="flex justify-between">
        <a href="#" className="text-xl font-semibold text-white">
          <p>Learn</p>
        </a>
        <a href="#" className="text-xl font-semibold text-white">
          <p>Invest</p>
        </a>
        <a href="#" className="text-xl font-semibold text-white">
          <p>About</p>
        </a>
      </div>

      <div className="flex justify-between">
        <Ybutton text={"Login"} className="bg-[#3e3e40] hover:bg-[#252526]" />


        <Ybutton text={"Register"} className="text-[#ffffff] bg-[#ffddc9]"/>
      </div>
    </div>
  );
}

export default header;
