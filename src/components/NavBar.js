import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="nav">
      <div className="logo">
        Career
        {/* <FaHandshake size={30} color="#FDC600" />   */}
        <BsShare size={30} color="#FDC600" />
        Connect
      </div>
      <div className="nav-list ">
        <div >
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <Link to={"/findjob"}>Find Job</Link>
        </div>
        <div>Employers</div>
        <div>Candidates</div>
        <div>Services</div>
        <div>Customer Supports</div>
        <Link to={"/login"}>
          <button className="btn-login btn-list  animate__animated  animate__bounce">
            Login
          </button>
        </Link>
        <Link to={"/account"}>
          <button className="btn-register btn-list">Register</button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
