import React from 'react';
import NavBar from '../components/NavBar';
import { FaSearch } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMyLocation } from "react-icons/md";
import { FaFilter } from "react-icons/fa";


export default function FindJob() {
  return (
    <>
      <NavBar />
      <div className="find-jo-container">
        <div className="find-job-quote">
          <h1 className="find-job-word">Find your dream job now</h1>
          {/* <div className="search-box  animate__animated  animate__bounceInRight">
            <FaSearch className="search-box-icon" />
            <input type="text" className="box-input" placeholder='Job title,Position,keyword...' />{" "}
            <span className="split">|</span>
            <IoLocation className="search-box-icon" />
            <input type="text" className="box-input" placeholder='City, State or Zip code' />
            <button>Find Job</button>
          </div> */}
        </div>
        <div className="job-section">
          <div className="job-search-container">
            <FaSearch className="search-box-icon" />
            <input
              type="text"
              className="serach-text-box"
              placeholder="Job title,Position,keyword..."
            />
            <span className="split">|</span>
            <IoLocation className="search-box-icon" />
            <input
              type="text"
              className="serach-text-box"
              placeholder="City, State or Zip code"
            />
            <div className="current-location">
              <MdOutlineMyLocation color="#fdc600" />
            </div>
            <div className="filters">
              <FaFilter color="#fdc600" /> &nbsp; Filters
            </div>
            <button>Find job</button>
          </div>
        </div>
        <div className="job-list-container">
          <div className="filter-section">
            filters
          </div>
          <div className="job-find-list">
            <div className="job-list-box">
              <div className="job-name">UI/UX Desiger</div>
              <div className="job-salary">
                <p>PART TIME</p> &nbsp; &nbsp;
                <span>Salary : $20,000 to $30,000</span>
              </div>
              <div className="company">
                <div className="company-logo">logo</div>&nbsp; &nbsp; &nbsp;
                &nbsp;
                <div className="company-details">
                  <div className="company-name">XYZ Company</div>
                  <div className="company-location">Chennai,TN</div>
                </div>
              </div>
            </div>
            <div className="job-list-box">
              <div className="job-name">UI/UX Desiger</div>
              <div className="job-salary">
                <p>PART TIME</p> &nbsp; &nbsp;
                <span>Salary : $20,000 to $30,000</span>
              </div>
              <div className="company">
                <div className="company-logo">logo</div>&nbsp; &nbsp; &nbsp;
                &nbsp;
                <div className="company-details">
                  <div className="company-name">XYZ Company</div>
                  <div className="company-location">Chennai,TN</div>
                </div>
              </div>
            </div>{" "}
            <div className="job-list-box">
              <div className="job-name">UI/UX Desiger</div>
              <div className="job-salary">
                <p>PART TIME</p> &nbsp; &nbsp;
                <span>Salary : $20,000 to $30,000</span>
              </div>
              <div className="company">
                <div className="company-logo">logo</div>&nbsp; &nbsp; &nbsp;
                &nbsp;
                <div className="company-details">
                  <div className="company-name">XYZ Company</div>
                  <div className="company-location">Chennai,TN</div>
                </div>
              </div>
            </div>{" "}
            <div className="job-list-box">
              <div className="job-name">UI/UX Desiger</div>
              <div className="job-salary">
                <p>PART TIME</p> &nbsp; &nbsp;
                <span>Salary : $20,000 to $30,000</span>
              </div>
              <div className="company">
                <div className="company-logo">logo</div>&nbsp; &nbsp; &nbsp;
                &nbsp;
                <div className="company-details">
                  <div className="company-name">XYZ Company</div>
                  <div className="company-location">Chennai,TN</div>
                </div>
              </div>
            </div>{" "}
            <div className="job-list-box">
              <div className="job-name">UI/UX Desiger</div>
              <div className="job-salary">
                <p>PART TIME</p> &nbsp; &nbsp;
                <span>Salary : $20,000 to $30,000</span>
              </div>
              <div className="company">
                <div className="company-logo">logo</div>&nbsp; &nbsp; &nbsp;
                &nbsp;
                <div className="company-details">
                  <div className="company-name">XYZ Company</div>
                  <div className="company-location">Chennai,TN</div>
                </div>
              </div>
            </div>{" "}
            <div className="job-list-box">
              <div className="job-name">UI/UX Desiger</div>
              <div className="job-salary">
                <p>PART TIME</p> &nbsp; &nbsp;
                <span>Salary : $20,000 to $30,000</span>
              </div>
              <div className="company">
                <div className="company-logo">logo</div>&nbsp; &nbsp; &nbsp;
                &nbsp;
                <div className="company-details">
                  <div className="company-name">XYZ Company</div>
                  <div className="company-location">Chennai,TN</div>
                </div>
              </div>
            </div>{" "}
            <div className="job-list-box">
              <div className="job-name">UI/UX Desiger</div>
              <div className="job-salary">
                <p>PART TIME</p> &nbsp; &nbsp;
                <span>Salary : $20,000 to $30,000</span>
              </div>
              <div className="company">
                <div className="company-logo">logo</div>&nbsp; &nbsp; &nbsp;
                &nbsp;
                <div className="company-details">
                  <div className="company-name">XYZ Company</div>
                  <div className="company-location">Chennai,TN</div>
                </div>
              </div>
            </div>{" "}
            <div className="job-list-box">
              <div className="job-name">UI/UX Desiger</div>
              <div className="job-salary">
                <p>PART TIME</p> &nbsp; &nbsp;
                <span>Salary : $20,000 to $30,000</span>
              </div>
              <div className="company">
                <div className="company-logo">logo</div>&nbsp; &nbsp; &nbsp;
                &nbsp;
                <div className="company-details">
                  <div className="company-name">XYZ Company</div>
                  <div className="company-location">Chennai,TN</div>
                </div>
              </div>
            </div>{" "}
            <div className="job-list-box">
              <div className="job-name">UI/UX Desiger</div>
              <div className="job-salary">
                <p>PART TIME</p> &nbsp; &nbsp;
                <span>Salary : $20,000 to $30,000</span>
              </div>
              <div className="company">
                <div className="company-logo">logo</div>&nbsp; &nbsp; &nbsp;
                &nbsp;
                <div className="company-details">
                  <div className="company-name">XYZ Company</div>
                  <div className="company-location">Chennai,TN</div>
                </div>
              </div>
            </div>{" "}
            <div className="job-list-box">
              <div className="job-name">UI/UX Desiger</div>
              <div className="job-salary">
                <p>PART TIME</p> &nbsp; &nbsp;
                <span>Salary : $20,000 to $30,000</span>
              </div>
              <div className="company">
                <div className="company-logo">logo</div>&nbsp; &nbsp; &nbsp;
                &nbsp;
                <div className="company-details">
                  <div className="company-name">XYZ Company</div>
                  <div className="company-location">Chennai,TN</div>
                </div>
              </div>
            </div>{" "}
            <div className="job-list-box">
              <div className="job-name">UI/UX Desiger</div>
              <div className="job-salary">
                <p>PART TIME</p> &nbsp; &nbsp;
                <span>Salary : $20,000 to $30,000</span>
              </div>
              <div className="company">
                <div className="company-logo">logo</div>&nbsp; &nbsp; &nbsp;
                &nbsp;
                <div className="company-details">
                  <div className="company-name">XYZ Company</div>
                  <div className="company-location">Chennai,TN</div>
                </div>
              </div>
            </div>{" "}
            <div className="job-list-box">
              <div className="job-name">UI/UX Desiger</div>
              <div className="job-salary">
                <p>PART TIME</p> &nbsp; &nbsp;
                <span>Salary : $20,000 to $30,000</span>
              </div>
              <div className="company">
                <div className="company-logo">logo</div>&nbsp; &nbsp; &nbsp;
                &nbsp;
                <div className="company-details">
                  <div className="company-name">XYZ Company</div>
                  <div className="company-location">Chennai,TN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
