import React, { useContext, useEffect, useState } from "react";
import { Avatar } from "@chakra-ui/react";
import "./Matches.css";
import { UserContext } from "../../context/Context";
import MatchesCard from "../../components/matches-card/MatchesCard";
import { Skeleton } from "@chakra-ui/react";
import { accessChat, allMessages, saveNotification, sendMessage } from "../../service/api.js";
import ChatComponent from "./ChatComponent";
import { Input } from "@chakra-ui/react";
import Drawer from "./Drawer";

const Matches = ({ socket, selectedChatCompare }) => {
  const [matchArray, setMatchArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    userData,
    selectedChat,
    setSelectedChat,
    chats,
    setChats,
    messages,
    setMessages,
    arrivalMessage,
    notObj
  } = useContext(UserContext);

  const [mssg, setMssg] = useState("");
  // const [selectedChatCompare, setSelectedChatCompare] = useState();

  useEffect(() => {
    const arr = userData?.liked?.filter((like) =>
      userData?.likedby?.find((liked) => liked._id === like._id)
    );

    setMatchArray(arr);
  }, [userData]);
  useEffect(()=>{
    // console.log("Hey man!")
   if(arrivalMessage)
   {
      if(selectedChat.users[0]._id === arrivalMessage.sender._id || selectedChat.users[1]._id === arrivalMessage.sender._id)
        setMessages((prev)=>[...prev,arrivalMessage]);
      else{
        const saveNot = async()=>{
          console.log(notObj,"before")
          const {data} = await saveNotification(notObj);
          console.log(data);
        }
        saveNot();
      }
   }
  },[arrivalMessage,selectedChat]);
  // useEffect(() => {
  //   if (!socket) return;
  //   socket.on("new message", (content) => {
  //     if (
  //       !selectedChatCompare ||
  //       selectedChatCompare._id !== content.chat._id
  //     ) {
  //       //notification

  //       console.log("helo");
  //     } else {
  //       console.log(content);
  //       setMessages([...messages, content]);
  //     }
  //   });
  // });

  useEffect(() => {
    if (!selectedChat) {
      console.log("select a chat");
      return;
    }
    try {
      const getMessages = async (id) => {
        const { data } = await allMessages(id);
        setMessages(data);
      };
      getMessages(selectedChat._id);
      selectedChatCompare = selectedChat;
      console.log(selectedChat);
      // setSelectedChatCompare(selectedChat);
      // eslint-disable-next-line
    } catch (error) {
      console.log(error);
    }
  }, [selectedChat]);

  const handleChat = async (elem) => {
    const data = await accessChat({ id: elem._id });

    if (!chats?.find((ch) => ch?._id === data?.data?._id))
      setChats([data.data, ...chats]);

    setSelectedChat(data.data);
  };

  const sendMssg = async (e) => {
    if (e.key === "Enter" && mssg) {
      const obj = {
        content: mssg,
        chatId: selectedChat._id,
      };
      setMssg("");
      const obj1={
        id:userData._id,
        name : userData.name,
        picture:userData.picture

      }
      const { data } = await sendMessage(obj);
      console.log(data, "from message");

      const id =
        selectedChat.users[0]._id === userData._id
          ? selectedChat.users[1]._id
          : selectedChat.users[0]._id;
      socket.emit("send message", { content: data, id: id , sender:obj1});
      setMessages([...messages, data]);
    }
  };

  return (
    <div className="matches-chat-container">
      <div className="matches-container">
        <div className="matches">
          <div className="heading">My Matches</div>
          <div className="search"></div>
          {matchArray ? (
            matchArray?.map((elem) => {
              return (
                <div
                  onClick={() => handleChat(elem)}
                  style={{ cursor: "pointer" }}
                >
                  <MatchesCard elem={elem} />
                </div>
              );
            })
          ) : (
            <Skeleton height="20px" />
          )}
        </div>
      </div>
      <div className="chat">
        {/* <div className='side-drawer'><Drawer matchArray={matchArray} /></div> */}
        {!selectedChat ? (
          <div className="drawer-select">
            <div className="side-drawer">
              <Drawer matchArray={matchArray} />
            </div>
           <div className="select-head"> Select a chat to start conversation </div>
          </div>
        ) : (
          <>
            <div className="info">
              <div className="avatar-info">
                <div className="side-drawer">
                  <Drawer matchArray={matchArray} />
                </div>
                <Avatar
                  size="xl"
                  name={
                    selectedChat.users[0]._id !== userData._id
                      ? `${selectedChat.users[0].name}`
                      : `${selectedChat.users[1].name}`
                  }
                  src={
                    selectedChat.users[0]._id !== userData._id
                      ? `${selectedChat.users[0].picture}`
                      : `${selectedChat.users[1].picture}`
                  }
                />
                <div className="name">
                  {selectedChat.users[0]._id !== userData._id
                    ? `${selectedChat.users[0].name}`
                    : `${selectedChat.users[1].name}`}
                </div>
              </div>
              <div className="texting">
                <ChatComponent messages={messages} />
                <div
                  className="input"
                  style={{ position: "relative", bottom: "0" }}
                ></div>
              </div>
              <div onKeyDown={(e) => sendMssg(e)}>
                <Input
                  id="message"
                  placeholder="Write a message"
                  onChange={(e) => setMssg(e.target.value)}
                  value={mssg}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Matches;
