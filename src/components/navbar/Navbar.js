import { React } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Icon, createIcon } from '@chakra-ui/react'

const Navbar = () => {

  // const verticalNav = (e) => {
  //   console.log(e.target);
  //   const nav = document.querySelector(".nav-links-horizontal");
  //   nav.classList.toggle("responsive");
  //   const temp = document.querySelector("#nav-link2");
  //   temp.classList.toggle("open");
  // };

  return (
    <div>
      <header>
        <div className="navbar">
          {/* <div className="logo">
            <img src={navpic} alt="shubhwed logo" />
          </div> */}
            <div
              className="icon"
              // onClick={(e) => {
              //   verticalNav(e);
              // }}
            >
              <i
                className="fa fa-bars"
                style={{ fontSize: "3rem", color: "#49516f" }}
              ></i>
            </div>
          <div className="nav-links-horizontal">
            <ul
              className="links-horizontal"
              style={{ margin: "0", padding: "0" }}
            >
              <li>
                <Link to="/">
                  <span
                    className="home-span"
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/matches">
                  <span
                    className="services"
                  >
                    Matches
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/userprofile">
                  <span className="profile">
                    Profile
                  </span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span
                    className="aboutUs"
                  >
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span
                    className="contactUs"
                  >
                    Contact Us
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <p className="login-span">
                    Login
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
