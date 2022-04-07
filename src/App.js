import "./App.css";
import { useEffect,useState } from "react";
import { Route } from "react-router-dom";
import { io } from "socket.io-client";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Signup from "./components/register/Signup";
import Update from "./components/profile/Update";
import Navbar from "./components/navbar/Navbar";
import AllUsers from "./components/users/AllUsers";
import DetailView from "./components/detail/DetailView";
import LikeCard from "./components/likecard/LikeCard";
import LikeCards from "./pages/likecards/LikeCards";
import LikedByCards from "./pages/likecards/LikedByCards";

function App() {

  // const [socket , setSocket] = useState(null);

  // useEffect(() => {  
  //   if(socket === null)
  //   {
      
  //     setSocket(io("http://localhost:8000"));
  //   }
  //   if(socket) {
  //     socket.sendBuffer = [];
  //     socket.volatile.emit("newuser","new user found");  
  //   }
  // },[socket]);

  
  return (
    <>
     <Navbar/>
      <Route exact path="/">
        <AllUsers />
      </Route>
      <Route exact path="/userprofile">
        <Profile />
      </Route>
      <Route path="/update/:id">
        <Update />
      </Route>
      <Route path="/detailview/:id">
        <DetailView/>
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/like">
        <LikeCards/>
      </Route>
      <Route path="/likedby">
        <LikedByCards/>
      </Route>
    </>
  );
}

export default App;
