import "./App.css";
import { useEffect,useState } from "react";
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
function App() {

  const [socket , setSocket] = useState(null);
  const data = JSON.parse(window.localStorage.getItem("userInfo"));
  console.log(data);
  useEffect(() => {  
    if(socket === null) {  
      setSocket(io("http://localhost:8000"));
    }
    if(socket) {
      if(data)
      socket.emit("setup",{sender:data});
    }
  },[socket]);
 
  return (
    <>
     
    <ChakraProvider>
      <Route exact path="/userprofile">
      <Navbar/>
        <Profile />
      </Route>
      <Route path="/update/:id">
      <Navbar/>
        <Update />
      </Route>
      <Route exact path="/">
      <Navbar/>
        <AllUsers socket={socket}/>
      </Route>
      <Route path="/detailview/:id">
      <Navbar/>
        <DetailView/>
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
      <Navbar/>
        <LikeCards/>
      </Route>
      <Route path="/likedby">
      <Navbar/>
        <LikedByCards/>
      </Route>
      <Route path="/matches">
      <Navbar/>
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
