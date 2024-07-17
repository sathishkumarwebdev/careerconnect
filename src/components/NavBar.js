import React from "react";
import { FaHandshake } from "react-icons/fa";
import { BsShare } from "react-icons/bs";

function NavBar() {
  return (
    <nav className="nav">
      <div className="logo">
        Career
        {/* <FaHandshake size={30} color="#FDC600" />   */}
        <BsShare size={30} color="#FDC600" />
        Connect
      </div>
      <div className="nav-list">
        <div>Home</div>
        <div>Find Job</div>
        <div>Employers</div>
        <div>Candidates</div>
        <div>Pricing Plans</div>
        <div>Customer Supports</div>

        <button className="btn-login btn-list  animate__animated  animate__bounce">
          Login
        </button>
        <button className="btn-signup btn-list">sign in</button>
      </div>
    </nav>
  );
}

export default NavBar;
