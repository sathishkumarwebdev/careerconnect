import React, { useContext } from "react";
import logo from "../assets/cc_logo.png";
import { useNavigate } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UserContext } from "../provider/UserProvider";
function NavBar() {
  const context = useContext(UserContext);
  const { userData } = context;
  const { firstname, lastname, usertype } = userData;

  return (
    <nav className="nav">
      <Link to={"/"}>
        <div className="logo-icon">
          <img src={logo} />
        </div>
      </Link>
      <div className="nav-list ">
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <Link to={"/findjob"}>Find Job</Link>
        </div>

        {usertype === "canditate" ? (
          <div>Candidates</div>
        ) : usertype === "employer" ? (
          <div>Employers</div>
        ) : (
          <div>Candidates</div>
        )}
        {usertype === "canditate" || usertype === "employer" ? (
          ""
        ) : (
          <div>Employers</div>
        )}
        <div>About</div>

        {/* <div>Services</div>
        <div>Customer Supports</div> */}
        {usertype === "canditate" || usertype === "employer" ? (
          ""
        ) : (
          <Link to={"/login"}>
            <button className="btn-login btn-list  animate__animated  animate__bounce">
              Login
            </button>
          </Link>
        )}
        {usertype === "canditate" || usertype === "employer" ? (
          <div className="profile">
            Profile <IoPersonCircleSharp className="profile-icon" />
          </div>
        ) : (
          <Link to={"/account"}>
            <button className="btn-register btn-list">Register</button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
