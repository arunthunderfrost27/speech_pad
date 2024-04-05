import React from "react";

import logo from "./logo.jpg";


const Navbar = () => {


  return (
    <nav
      className={`sm:px-2 items-center fixed z-20 `}
    >
      <header className="Nav-header">
        <img src={logo} className="Nav-logo " alt="logo" />
        <p className="Nav-p">
          Delta Sigma Ventures pvt ltd
        </p>
      </header>
    </nav>
  );
};

export default Navbar;
