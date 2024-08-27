import React from "react";
import NavBar from "../components/NavBar";
import career from "../assets/career.svg";
import downarrow from "../assets/downarrow.png"
import uparrow from "../assets/uparrow.png";
import { FaSearch } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { RiBriefcase4Fill } from "react-icons/ri";
import { LuUserPlus2 } from "react-icons/lu";
import { MdCloudUpload } from "react-icons/md";
import { IoSearchCircle } from "react-icons/io5";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const notify = () => toast("Wow so easy!");
  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="home-top">
          <div className="home-section">
            <div className="words  animate__animated  animate__bounceInLeft">
              Find a job that suits
            </div>
            <div className="words  animate__animated  animate__bounceInLeft">
              your interest & skills
            </div>
            <div className="search-box  animate__animated  animate__bounceInRight">
              <FaSearch className="search-box-icon" />
              <input
                type="text"
                className="box-input"
                placeholder="Job title,Position,keyword..."
              />{" "}
              <span className="split">|</span>
              <IoLocation className="search-box-icon" />
              <input
                type="text"
                className="box-input"
                placeholder="City, State or Zip code"
              />
              <button>Find Job</button>
            </div>
          </div>
          {/* <div className="home-right-section">
            
          </div> */}
        </div>
        <div className="home-bottom">
          <div className="bottom-box">
            <div className="bottom-box-icon">
              <FaBriefcase className="icon-bottom" />
            </div>
            <div className="home-bottom-content">
              <div>1,75,324</div>
              <div>
                <p>Live jobs</p>
              </div>
            </div>
          </div>
          <div className="bottom-box">
            <div className="bottom-box-icon">
              <BsFillBuildingsFill className="icon-bottom" />
            </div>
            <div className="home-bottom-content">
              <div>97,354</div>
              <div>
                <p>Companies</p>
              </div>
            </div>
          </div>
          <div className="bottom-box">
            <div className="bottom-box-icon">
              <IoIosPeople className="icon-bottom" />
            </div>
            <div className="home-bottom-content">
              <div>38,47,154</div>
              <div>
                <p>Candidates</p>
              </div>
            </div>
          </div>
          <div className="bottom-box">
            <div className="bottom-box-icon">
              <RiBriefcase4Fill className="icon-bottom" />
            </div>
            <div className="home-bottom-content">
              <div>75,324</div>
              <div>
                <p>New jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-vacancies">
        <div className="vacancies-title"> Most Popular Vacancies</div>
        <div className="vacancies-content">
          <div className="job-list">
            Anesthesiologists
            <p className="job-list-content">45,904 Open Positions</p>
          </div>
          <div className="job-list">
            Surgeons
            <p className="job-list-content">45,904 Open Positions</p>
          </div>
          <div className="job-list">
            Obstetricians-Gynecologists
            <p className="job-list-content">45,904 Open Positions</p>
          </div>
          <div className="job-list">
            Orthodontistsr
            <p className="job-list-content">45,904 Open Positions</p>
          </div>
          <div className="job-list">
            Maxillofacial Surgeons
            <p className="job-list-content">45,904 Open Positions</p>
          </div>
          <div className="job-list">
            Software Developer
            <p className="job-list-content">45,904 Open Positions</p>
          </div>
          <div className="job-list">
            Psychiatrists
            <p className="job-list-content">45,904 Open Positions</p>
          </div>
          <div className="job-list">
            Data Scientist{" "}
            <p className="job-list-content">45,904 Open Positions</p>
          </div>
          <div className="job-list">
            Financial Manager
            <p className="job-list-content">45,904 Open Positions</p>
          </div>
          <div className="job-list">
            Management Analysis
            <p className="job-list-content">45,904 Open Positions</p>
          </div>
          <div className="job-list">
            IT Manager
            <p className="job-list-content">45,904 Open Positions</p>
          </div>
          <div className="job-list">
            Operations Research Analysis
            <p className="job-list-content">45,904 Open Positions</p>
          </div>
        </div>
      </div>
      <div className="work-flow">
        <div className="work-flow-title">How Career Connect work</div>
        <div className="work-flow-content">
          <div className="work-flow-content-box">
            <div className="work-flow-icon">
              <LuUserPlus2 />
            </div>
            Create Account
            <div className="arrow-down">
              <img src={downarrow} alt="down" />
            </div>
          </div>

          <div className="work-flow-content-box">
            <div className="work-flow-icon">
              <MdCloudUpload />
            </div>
            Upload CV/Resume
            <div className="arrow-up">
              <img src={uparrow} alt="down" />
            </div>
          </div>
          <div className="work-flow-content-box">
            <div className="work-flow-icon">
              <IoSearchCircle />
            </div>
            Find suitable job
            <div className="arrow-down">
              <img src={downarrow} alt="down" />
            </div>
          </div>
          <div className="work-flow-content-box">
            <div className="work-flow-icon">
              <TbRosetteDiscountCheckFilled />
            </div>
            Apply job
            <div className="arrow-up">
              <img src={uparrow} alt="" className="img" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    </>
  );
}
