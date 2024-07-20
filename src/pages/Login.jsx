import React from "react";
import { Link } from "react-router-dom";
import { BsShare } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="create-acc-container">
      {/* <div className="logo-container">
          <div className="logo">
            Career
            
            <BsShare size={30} color="#FDC600" />
            Connect
          </div>
        </div> */}
      <div className="account-creation-container">
        <div className="account-creation-form">
          <div className="create-acc">
            <div className="section-part">
              <div>
                {" "}
                <h2>Login</h2>
                <Link to={"/account"}>
                  <p>
                    Don't have account?&nbsp;
                    <span className="blue-italic">Create account</span>{" "}
                  </p>
                </Link>
              </div>
              <div className="logo-container">
                <div className="logo">
                  Career
                  <BsShare size={30} color="#FDC600" />
                  Connect
                </div>
              </div>
            </div>
          </div>

          <div className="input-form">
            <div className="general-input">
              <input
                type="text"
                placeholder="Email Address"
                className="text-input"
              />
            </div>
            <div className="general-input">
              <input
                type="text"
                placeholder="Password"
                className="text-input"
              />
            </div>

            <div className="register-btn">
              <button>Login</button>
            </div>
          </div>
          <div className="or">or</div>
          <div className="sigin">
            <button className="brand-btn fb">
              {" "}
              <FaFacebookF color="blue" /> &nbsp; sign in with Facebook
            </button>{" "}
            <button className="brand-btn">
              <FcGoogle /> &nbsp; sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
