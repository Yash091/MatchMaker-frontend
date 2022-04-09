import { React , useContext, useEffect , useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Icon, createIcon } from '@chakra-ui/react'
import { UserContext } from "../../context/Context";
import { BellIcon } from '@chakra-ui/icons'
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import { Badge } from "@mui/material";
import Badge from "@mui/material/Badge";
import { getUser } from "../../service/api";

const Navbar = ({socket}) => {
  
  const {userData,setUserData} = useContext(UserContext);
  const [notification , setNotification] = useState(0);
  
  useEffect(()=>{
    if(socket){
      socket.on("getNotification" , async({sender , type}) => {
        console.log(type);
        const data = await getUser();
        console.log(data.data);
        setUserData(data.data);   
        setNotification(prev => prev+1);
    });
    }
  },[socket])
  const verticalNav = (e) => {
    
    const nav = document.querySelector(".nav-links-horizontal");
    nav.classList.toggle("responsive");
    // const temp = document.querySelector("#nav-link2");
    // temp.classList.toggle("open");
  };
  const handleLogout=()=>{}
  return (
    <div>
      <header>
        <div className="navbar">
          {/* <div className="logo">
            <img src={navpic} alt="shubhwed logo" />
          </div> */}
          <BellIcon w={8} h={8} className="bell-small-screen" />
          <span className="bell-small-screen" style={{
                background: "cyan",
                padding: "5px",
                position: "relative",
                right: "18px",
                bottom: "10px",
                borderRadius: "5162px",
                fontSize: "10px",
                width: "min-content",
                textAlign: "center",
                fontWeight: "bold",
                  }}>{notification}</span>
          {/* <Badge badgeContent={4}>
              <NotificationsNoneIcon
              
              fontSize={"large"}
            />
           </Badge>           */}
          
          <div
            className="icon"
            onClick={(e) => {
              verticalNav(e);
            }}
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
                  <span className="home-span">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/matches">
                  <span className="services">Matches</span>
                </Link>
              </li>
              <li>
                <Link to="/userprofile">
                  <span className="profile">Profile</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span className="aboutUs">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span className="contactUs">Contact Us</span>
                </Link>
              </li>
              <li className="bell-large-screen">
                {/* <NotificationsNoneIcon
                  className="bell-small-screen"
                  fontSize: "large"
                  style={{fontSize: "large"}}
                /> */}
                <BellIcon w={9} h={9} />
                <span style = {
                  {
                    background: "cyan",
                    padding: "5px",
                    position: "relative",
                    right: "20px",
                    bottom: "8px",
                    borderRadius: "5162px",
                    fontSize: "15px",
                    width: "40px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }
                }> {
                  notification
                } </span>
              </li>
              <li>
                {!userData ? (
                  <Link to="/login">
                    <p className="login-span">Login</p>
                  </Link>
                ) : (
                  <>
                    <Link to="/login" onCLick={() => handleLogout()}>
                      <p className="login-span">Logout</p>
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
