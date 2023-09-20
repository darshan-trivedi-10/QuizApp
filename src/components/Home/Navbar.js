import React from "react";
import logo from "../../assest/logo.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand">
          {/* <img src={logo} width="60" height="50" alt="" />  Quiz App */}
        </div>
      </nav>
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">
          <img src={logo} width="60" height="50" alt="" />  Quiz App
        </div>
      </nav>
    </>
  );
}

export default Navbar;
