import { React, useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Icon, createIcon } from "@chakra-ui/react";
import { UserContext } from "../../context/Context";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { getUser , removeNotif , clearNotification , logout } from "../../service/api";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Navbar = ({ socket }) => {

  const history = useHistory();

  const { userData, setUserData } = useContext(UserContext);
  const [notification, setNotification] = useState(0);
  const [notlen, setNotlen] = useState(0);

  // useEffect(() => {
  //   if (socket) {
  //     socket.on("getNotification", async ({ sender, type }) => {
  //       // console.log(type);
  //       const data = await getUser();
  //       // console.log(data.data);
  //       setUserData(data.data);
  //     });
  //   }
  // });

  useEffect(() => {
    if(!userData)
      history.replace("/");
    else
    setNotlen(userData.notifications.length);
  }, [userData]);

  //Vertical Navbar
  const verticalNav = (e) => {
    const nav = document.querySelector(".nav-links-horizontal");
    nav.classList.toggle("responsive");
   
  };

  //Reading Notifications
  const handleRead = async (notif , id) => {
    const notification = notif;
    const data = await removeNotif(notif , id);
    // console.log(data);
    setUserData(data.data);
    history.push(`/detailview/${notification._id}`);
    window.location.reload(true);
  }

  //CLear All Notifications
  const handleClearNotification = async () => {
    const data = await clearNotification({id: userData._id});
    setUserData(data.data);
  } 

  //logout functionality
  const handleLogout = async () => {
    // console.log("clicked")
    const data = await logout();
    window.localStorage.clear();
    setUserData(null);
    history.replace("/login");
  };

  return (
    <div>
      <header>
        <div className="navbar">
         {!userData?"": <li className="bell-small-screen">
            <Menu isLazy closeOnSelect matchWidth>
              <MenuButton>
                <BellIcon w={8} h={8} />{" "}
              </MenuButton>{" "}
              <MenuList>
                {notlen > 3 ? (
                  <MenuItem
                    minH="40px"
                    minW="300px"
                    onClick={() =>
                      handleRead(userData?.notifications[3], userData._id)
                    }
                  >
                    {" "}
                    <Avatar
                      size="xs"
                      name={userData?.notifications[3]?.name}
                      src={userData?.notifications[3]?.picture}
                      mr={3}
                    />
                    {userData?.notifications[3]?.message}
                  </MenuItem>
                ) : (
                  ""
                )}{" "}
                {notlen > 2 ? (
                  <MenuItem
                    minH="40px"
                    minW="300px"
                    onClick={() =>
                      handleRead(userData?.notifications[2], userData._id)
                    }
                  >
                    {" "}
                    <Avatar
                      size="xs"
                      name={userData?.notifications[2]?.name}
                      src={userData?.notifications[2]?.picture}
                      mr={3}
                    />
                    {userData?.notifications[2]?.message}
                  </MenuItem>
                ) : (
                  ""
                )}{" "}
                {notlen > 1 ? (
                  <MenuItem
                    minH="40px"
                    minW="300px"
                    onClick={() =>
                      handleRead(userData?.notifications[1], userData._id)
                    }
                  >
                    {" "}
                    <Avatar
                      size="xs"
                      name={userData?.notifications[1]?.name}
                      src={userData?.notifications[1]?.picture}
                      mr={3}
                    />
                    {userData?.notifications[1]?.message}
                  </MenuItem>
                ) : (
                  ""
                )}{" "}
                {notlen > 0 ? (
                  <MenuItem
                    minH="40px"
                    minW="300px"
                    onClick={() =>
                      handleRead(userData?.notifications[0], userData._id)
                    }
                  >
                    {" "}
                    <Avatar
                      size="xs"
                      name={userData?.notifications[0]?.name}
                      src={userData?.notifications[0]?.picture}
                      mr={3}
                    />
                    {userData?.notifications[0]?.message}{" "}
                  </MenuItem>
                ) : (
                  "No Notification"
                )}{" "}
                {notlen > 4 ? <MenuItem>view More</MenuItem> : ""}{" "}
                {notlen > 0 ? (
                  <MenuItem onClick={() => handleClearNotification()}>
                    Clear Notifications
                  </MenuItem>
                ) : (
                  ""
                )}
              </MenuList>{" "}
            </Menu>{" "}
            <span
              style={{
                background: "#EA0A84",
                padding: "5px",
                position: "relative",
                right: "20px",
                bottom: "8px",
                borderRadius: "5162px",
                fontSize: "15px",
                width: "40px",
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {notlen}
            </span>
          </li>}
          <div
            className="icon"
            onClick={(e) => {
              verticalNav(e);
            }}
            style={{
              paddingRight: "1rem",
            }}
          >
            <i
              className="fa fa-bars"
              style={{
                fontSize: "3rem",
                color: "#EA0A84;",
              }}
            ></i>{" "}
          </div>{" "}
          <div className="nav-links-horizontal">
            <ul
              className="links-horizontal"
              style={{
                margin: "0",
                padding: "0",
              }}
            >
              <li>
                <Link to="/">
                  <span className="home-span"> Home </span>{" "}
                </Link>{" "}
              </li>{" "}
              {/* <li>
                <Link to="/matches">
                  <span className="services"> Matches </span>{" "}
                </Link>{" "}
              </li>{" "} */}
              <li>
                <Link to="#">
                  <span className="aboutUs"> About Us </span>{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                <Link to="#">
                  <span className="contactUs"> Contact Us </span>{" "}
                </Link>{" "}
              </li>{" "}
              {!userData?"":<li className="bell-large-screen">
                {" "}
                {/* <NotificationsNoneIcon
                              className="bell-small-screen"
                              fontSize: "large"
                              style={{fontSize: "large"}}
                            /> */}{" "}
                <Menu isLazy closeOnSelect matchWidth>
                  <MenuButton>
                    <BellIcon w={8} h={8} />{" "}
                  </MenuButton>{" "}
                  <MenuList>
                    {notlen > 3 ? (
                      <MenuItem
                        minH="40px"
                        minW="300px"
                        onClick={() =>
                          handleRead(userData?.notifications[3], userData._id)
                        }
                      >
                        {" "}
                        <Avatar
                          size="xs"
                          name={userData?.notifications[3]?.name}
                          src={userData?.notifications[3]?.picture}
                          mr={3}
                        />
                        {userData?.notifications[3]?.message}
                      </MenuItem>
                    ) : (
                      ""
                    )}{" "}
                    {notlen > 2 ? (
                      <MenuItem
                        minH="40px"
                        minW="300px"
                        onClick={() =>
                          handleRead(userData?.notifications[2], userData._id)
                        }
                      >
                        {" "}
                        <Avatar
                          size="xs"
                          name={userData?.notifications[2]?.name}
                          src={userData?.notifications[2]?.picture}
                          mr={3}
                        />
                        {userData?.notifications[2]?.message}
                      </MenuItem>
                    ) : (
                      ""
                    )}{" "}
                    {notlen > 1 ? (
                      <MenuItem
                        minH="40px"
                        minW="300px"
                        onClick={() =>
                          handleRead(userData?.notifications[1], userData._id)
                        }
                      >
                        {" "}
                        <Avatar
                          size="xs"
                          name={userData?.notifications[1]?.name}
                          src={userData?.notifications[1]?.picture}
                          mr={3}
                        />
                        {userData?.notifications[1]?.message}
                      </MenuItem>
                    ) : (
                      ""
                    )}{" "}
                    {notlen > 0 ? (
                      <MenuItem
                        minH="40px"
                        minW="300px"
                        onClick={() =>
                          handleRead(userData?.notifications[0], userData._id)
                        }
                      >
                        {" "}
                        <Avatar
                          size="xs"
                          name={userData?.notifications[0]?.name}
                          src={userData?.notifications[0]?.picture}
                          mr={3}
                        />
                        {userData?.notifications[0]?.message}{" "}
                      </MenuItem>
                    ) : (
                      "No Notification"
                    )}{" "}
                    {notlen > 4 ? <MenuItem>view More</MenuItem> : ""}{" "}
                    {notlen > 0 ? (
                      <MenuItem onClick={() => handleClearNotification()}>
                        Clear Notifications
                      </MenuItem>
                    ) : (
                      ""
                    )}
                  </MenuList>{" "}
                </Menu>{" "}
                <span
                  style={{
                    background: "#EA0A84",
                    padding: "5px",
                    position: "relative",
                    right: "20px",
                    bottom: "8px",
                    borderRadius: "5162px",
                    fontSize: "15px",
                    width: "40px",
                    textAlign: "center",
                    fontWeight: "500",
                    color: "white",
                  }}
                >
                  {notlen}
                </span>
              </li>}
              <li>
                {" "}
                {!userData ? (
                  <Link to="/login">
                    <p className="login-span"> Login </p>{" "}
                  </Link>
                ) : (
                  <>
                    <Menu maxW="15px">
                      <MenuButton>
                        <Avatar
                          size="md"
                          name={userData.name}
                          src={userData.picture}
                          // mr={3}
                        />
                        <ChevronDownIcon h={10} w={10} />
                      </MenuButton>
                      <MenuList maxW="inherit">
                        <MenuItem maxW="inherit">
                          <Link to="/userprofile">Your Profile</Link>
                        </MenuItem>
                        <MenuItem maxW="inherit">
                          <Link to="/matches">Your Matches</Link>
                        </MenuItem>
                        <MenuItem maxW="inherit" onClick={() => handleLogout()}>
                          Logout
                        </MenuItem>
                      </MenuList>
                    </Menu>
                    {/* <Link to="/login" onCLick={() => handleLogout()}>
                      <p className="login-span"> Logout </p>{" "}
                    </Link>{" "} */}
                  </>
                )}{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </header>{" "}
    </div>
  );
};

export default Navbar;
