import React from "react";
import imgLogo from "assets/logo-tama.webp";
import { Button } from "./InputGroup";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-white mt-10">
        <div className="navbar-start lg:ml-24">
          <a className="btn btn-ghost normal-case text-xl">
            {" "}
            <img src={imgLogo} className="hidden lg:flex lg:w-[6rem] -mt-4" />
          </a>
        </div>
        <div className="navbar-center flex flex-col  lg:hidden">
          <h1 className="font-poppins font-bold text-orange-400 mb-5 text-4xl ">
            {" "}
            Tamasakti
          </h1>
          <Button
            id="btn-hire"
            label="Hire Me"
            className="bg-white border-strokeNav border-2 text-strokeNav rounded-full py-1 px-10 text-xl hover:bg-orange-400 hover:text-white font-semibold font-poppins"
          />
        </div>
        <div className="navbar-end lg:mr-24">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="hidden lg:flex mr-5 text-xl font-semibold font-poppins text-black">
                Home
              </a>
            </li>
            <li>
              <Button
                id="btn-hire"
                label="Hire Me"
                className="bg-white border-strokeNav border-2 text-strokeNav rounded-full py-1 px-10 text-xl hover:bg-orange-400 hover:text-white font-semibold font-poppins hidden lg:flex"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
