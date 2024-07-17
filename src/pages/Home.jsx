import React from "react";
import NavBar from "../components/NavBar";
import career from "../assets/career.svg";
import { FaSearch } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { RiBriefcase4Fill } from "react-icons/ri";
export default function Home() {
  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="home-top">
          <div className="home-section">
            <div className="words">Find a job that suits</div>
            <div className="words">your interest & skills</div>
            <div className="search-box">
              <FaSearch className="search-box-icon" />
              <input type="text" className="box-input" />{" "}
              <span className="split">|</span>
              <IoLocation className="search-box-icon" />
              <input type="text" className="box-input" />
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
    </>
  );
}
