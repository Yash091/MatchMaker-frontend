import React, {  useContext, useEffect, useState } from 'react'
import { Avatar } from '@chakra-ui/react'
import "./Matches.css"
import { UserContext } from '../../context/Context'
import MatchesCard from '../../components/matches-card/MatchesCard'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const Matches = () => {

  // const {user} = useContext(UserContext);
  const [matchArray, setMatchArray] = useState([]);
  const [loading ,setLoading] = useState(true);
  const {userData} = useContext(UserContext);
  useEffect(()=>{
    
    // const user = JSON.parse(window.localStorage.getItem("userInfo"));
    // const arr = user?.liked?.filter((elem) => ( elem._id ===  );
    const arr = userData?.liked?.filter(like => userData?.likedby?.find(liked => liked._id === like._id));
    // console.log(arr);
    setMatchArray(arr);
  },[userData])

  return (
    <div className='matches-chat-container'>
        <div className='matches-container'>
          <div className="matches">
            <div className='heading'>My Matches</div>
            <div className="search">
              
            </div>
            {
                matchArray ? matchArray?.map(elem => {
                  return <MatchesCard elem={elem}/>
              }): < Skeleton height = '20px' />
            }
          </div>
        </div>
        <div className="chat">
          <div className="info">
            <div className="avatar-info">
              <Avatar
                size = 'xl'
                name = 'Kola Tioluwani'
                src = 'https://bit.ly/tioluwani-kolawole'
              />
              <div className="name">Name</div>
            </div>
          </div>
            <div className="texting">
                No text
            </div>
        </div>
    </div>
  )
}

export default Matches