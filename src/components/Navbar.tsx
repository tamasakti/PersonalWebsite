import React from "react";
import imgLogo from "assets/logo-tama.webp";
import { Button } from "./InputGroup";

const Navbar = () => {
  return (
    <>
      <div className="navbar mt-10">
        <div className="navbar-start lg:ml-24">
          <img src={imgLogo} className="w-[6rem] -mt-4" />
        </div>

        <div className="navbar-end lg:mr-24">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="mr-5 text-xl font-semibold font-poppins text-black">
                Home
              </a>
            </li>
            <li>
              <Button
                id="btn-hire"
                label="Hire Me"
                className="bg-white border-strokeNav border-2 text-strokeNav rounded-full py-1 px-10 text-xl hover:bg-orange-400 hover:text-white font-semibold font-poppins"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
