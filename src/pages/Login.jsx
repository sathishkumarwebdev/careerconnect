import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { BsShare } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  const formData = {
    emailaddress: "",
    password: "",
  };

  const [loginData, SetLoginData] = useState(formData);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    SetLoginData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
    const notify = () => {
  
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
      
      // setTimeout(navigate("/"), 5000);
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { emailaddress, password } = loginData;
    const body = { emailaddress, password };
    const res = await fetch(
      "https://careerconnect-server-zcqh.onrender.com/user/login",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
      
    if(data.userLogin){
      console.log(data.message);
      
      notify(data.message);
      
    }
    else{
      console.log(data.message);
      
    }

    try {
    } catch (err) {
      console.error(err.message);
    }
  };

  // const handleSubmit = async (e) => {

  //   if(!emailaddress && !password){
  //     alert("fields required");

  //   }else{
  //     const result = await fetch(
  //       `https://careerconnect-server-zcqh.onrender.com/user?emailaddress= ${emailaddress}/password=${password}`,
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const data = await result.json();
  //     console.log(data);

  //   }

  // };

  return (
    <div className="create-acc-container">
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
                name="emailaddress"
                onChange={handleLogin}
                required
              />
            </div>
            <div className="general-input">
              <input
                type="password"
                placeholder="Password"
                className="text-input"
                name="password"
                onChange={handleLogin}
              />
            </div>

            <div className="register-btn">
              <button onClick={handleSubmit}>Login</button>
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
