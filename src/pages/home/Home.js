import React from "react";

import "./Home.css";
import { Button, ButtonGroup , Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div></div>
      <div className="home-content">
        <div>
          <div>
            <div className="welcome-text">Welcome to</div>
            <div className="web-name">Match Maker</div>
          </div>
          <div className="brief">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
            molestie at elementum eu.
          </div>
          <Link to ="/register">
          <Button
            bg="#EA0A84"
            color="white"
            _hover={{ bg: "#0aea6f" }}
            className="register-btn"
          >
            Register Now
          </Button>
          </Link>
          <div className="log-link">
            Already a user? <Link to = "/login"><span> Login</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
