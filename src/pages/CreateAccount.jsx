import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsShare } from "react-icons/bs";
import professional from "../assets/professional.webp";

import { SelectButton } from "primereact/selectbutton";

export default function () {
  let option = "",
    candidateBtn = "selected",
    employerBtn = "not-selected";
  const [trigger, setTrigger] = useState(true);

  if (trigger) {
    option = "canditate";
    candidateBtn = "selected";
    employerBtn = "not-selected";
  } else {
    option = "employer";
    candidateBtn = "not-selected";
    employerBtn = "selected";
  }

  console.log(option);
  return (
    <>
      <div className="create-acc-container">
        <div className="account-creation-container">
          <div className="account-creation-form">
            <div className="create-acc">
              <div className="section-part">
                <div>
                  {" "}
                  <h2>Create account.</h2>
                  <Link to={"/login"}>
                    <p>
                      Already have account? &nbsp;
                      <span className="blue-italic">Log In</span>{" "}
                    </p>
                  </Link>
                </div>
                <div className="logo-container">
                  <div className="logo">
                    Career
                    {/* <FaHandshake size={30} color="#FDC600" />   */}
                    <BsShare size={30} color="#FDC600" />
                    Connect
                  </div>
                </div>
              </div>
            </div>
            <div className="option">
              <div>
                <button
                  onClick={() => setTrigger(true)}
                  className={candidateBtn}
                >
                  Candidate
                </button>
              </div>
              <div>
                <button
                  onClick={() => setTrigger(false)}
                  className={employerBtn}
                >
                  Employers
                </button>
              </div>
            </div>
            <div className="input-form">
              <div className="name-box">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="text-input"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="User Name"
                    className="text-input"
                  />
                </div>
              </div>
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
              <div className="general-input">
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="text-input"
                />
              </div>
              <div className="register-btn">
                <button>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
