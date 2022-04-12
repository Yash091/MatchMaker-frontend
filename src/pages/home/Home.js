import React, { useContext } from "react";
import "./Home.css";
import { Button, ButtonGroup, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import img1 from "../../image/home-pic.png"
import { UserContext } from "../../context/Context";

const Home = () => {
  const {userData} = useContext(UserContext);
  return (
    <div className="home-container">
      <div className="small-screen-bg">
          <img src={img1}/>
      </div>
      <div className="home-content">
        <div>
          <div className="welcome">
            <div className="welcome-text">Welcome to</div>
            <div className="web-name">Match Maker</div>
          </div>
          <div className="brief">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
            molestie at elementum eu.
          </div>
          {!userData ?<> <Link to="/signup">
            <Button
              bg="#EA0A84"
              color="white"
              _hover={{ bg: "white" }}
              className="register-btn"
            >
              Register Now
            </Button>
          </Link> <div className="log-link">
            Already a user?{" "}
            <Link to="/login">
              <span> Login</span>
            </Link>
          </div></>:<Link to="/allusers">
            <Button
              bg="#EA0A84"
              color="white"
              _hover={{ bg: "#0aea6f" }}
              className="register-btn"
            >
              See all Users
            </Button>
          </Link>}
         
        </div>
      </div>
    </div>
  );
};

export default Home;
