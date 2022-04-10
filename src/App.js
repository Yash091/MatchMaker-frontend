import "./App.css";
import { useEffect,useState,useContext } from "react";
import { Route } from "react-router-dom";
import { io } from "socket.io-client";
import Register from "./pages/authentication/register/Register";
import Login from "./pages/authentication/login/Login";
import Profile from "./pages/profile/Profile";
import Signup from "./pages/authentication/register/Signup";
import Update from "./pages/profile/Update"
import Navbar from "./components/navbar/Navbar";
import AllUsers from "./pages/allusers/AllUsers";
import DetailView from "./pages/detail/DetailView";
import LikeCard from "./components/likecard/LikeCard";
import LikeCards from "./pages/likecards/LikeCards";
import LikedByCards from "./pages/likecards/LikedByCards";
import Matches from "./pages/matches/Matches";
import MatchesCard from "./components/matches-card/MatchesCard";
import { ChakraProvider } from '@chakra-ui/react'
import {UserContext} from "./context/Context"
import {getUser} from "./service/api"

function App() {

  const [socket , setSocket] = useState(null);
  // const data = JSON.parse(window.localStorage.getItem("userInfo"));
  const {userData,setUserData} = useContext(UserContext);
  // const [notification,setNotification] = useState(0);
  useEffect(() => {  
    if(socket === null) {  
        setSocket(io("http://localhost:8000"));
    }
    if(socket) {
      if(userData)
      socket.emit("setup",{sender:userData});
      socket.on("getNotification" , async({sender , type}) => {
        console.log(type);
        const data = await getUser();
        console.log(data.data);
        setUserData(data.data);   
        
    });
    }
  },[socket,userData]);

  return (
    <>
     
    <ChakraProvider>
      
      <Route exact path="/userprofile">
      <Navbar socket={socket}/>
        <Profile socket={socket} />
      </Route>
      <Route path="/update/:id">
        <Navbar socket={socket}/>
        <Update />
      </Route>
      <Route exact path="/">
        <Navbar socket={socket}/>
        <AllUsers socket={socket}/>
      </Route>
      <Route path="/detailview/:id">
        <Navbar socket={socket}/>
        <DetailView socket={socket}/>
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login socket={socket}/>
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/like">
        <Navbar socket={socket}/>
        <LikeCards/>
      </Route>
      <Route path="/likedby">
        <Navbar socket={socket}/>
        <LikedByCards/>
      </Route>
      <Route path="/matches">
        <Navbar socket={socket}/>
        <Matches/>
      </Route>
      <Route path ="/matchcard">
        <MatchesCard/>
      </Route>
      </ChakraProvider>
    </>
  );
}

export default App;
