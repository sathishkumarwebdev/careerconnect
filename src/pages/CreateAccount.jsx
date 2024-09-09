import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/cc_logo.png";
import { BsShare } from "react-icons/bs";
import { toast, ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function () {
  const formData = {
    usertype: "canditate",
    firstname: "",
    lastname: "",
    emailaddress: "",
    password: "",
  };
  const [userData, setUserData] = useState(formData);
  const [trigger, setTrigger] = useState(true);
  let candidateBtn = "selected",
    employerBtn = "not-selected";

  if (trigger) {
    candidateBtn = "selected";
    employerBtn = "not-selected";
  } else {
    candidateBtn = "not-selected";
    employerBtn = "selected";
  }

  const handleCanditateBtn = () => {
    setUserData((data) => ({ ...data, usertype: "canditate" }));
    setTrigger(true);
  };
  const handleemployeBtn = () => {
    setUserData((data) => ({ ...data, usertype: "employer" }));
    setTrigger(false);
  };

  const navigate = useNavigate();

  console.log(userData);
  const handleOnChangeData = (e) => {
    setUserData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const notify = () => {
    navigate("/login");
    toast.success("Sucess", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, emailaddress, password, usertype } = userData;
    const body = { usertype, firstname, lastname, emailaddress, password };
    const res = await fetch(
      "https://careerconnect-server-zcqh.onrender.com/user",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status === 201) {
      notify();
    }
    console.log(res.status);

    try {
    } catch (err) {
      console.error(err.message);
    }
  };

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
                  {/* <div className="logo">
                    Career
                    
                    <BsShare size={30} color="#FDC600" />
                    Connect
                  </div> */}
                  <Link to={"/"}>
                    <div className="logo-icon">
                      {/* Career
                  <BsShare size={30} color="#FDC600" />
                  Connect */}
                      <img src={logo} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="option">
              <div>
                <button onClick={handleCanditateBtn} className={candidateBtn}>
                  Candidate
                </button>
              </div>
              <div>
                <button onClick={handleemployeBtn} className={employerBtn}>
                  Employers
                </button>
              </div>
            </div>

            <div className="input-form">
              <div className="name-box">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="text-input"
                    name="firstname"
                    onChange={handleOnChangeData}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="text-input"
                    onChange={handleOnChangeData}
                  />
                </div>
              </div>
              <div className="general-input">
                <input
                  type="text"
                  name="emailaddress"
                  placeholder="Email Address"
                  className="text-input"
                  onChange={handleOnChangeData}
                />
              </div>
              <div className="general-input">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="text-input"
                  onChange={handleOnChangeData}
                />
              </div>

              <div className="register-btn">
                <button onClick={handleSubmit}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose="true" />
    </>
  );
}
