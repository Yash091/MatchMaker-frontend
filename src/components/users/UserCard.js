import {React , useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./UserCard.css"

const UserCard = ({elem , socket , user}) => {

    const handleLike = () => {
        socket.emit("liked",user.name,elem.name)
    }
    
    useEffect(()=>{
        socket.on("getnotification",(msg)=>{
            console.log(msg);
        })
    },[socket])
  
    return (
    <div className="user-card-container">
        <div className="profile-pic">
            <img src={elem.picture}/>
        </div>
        <div className='info'>
            <div className="details">
                <div className="first">
                    <div className="name">Name : {elem.name}</div>
                    <div className='age'>D.O.B : {elem.dob}</div>
                    <div className='religion'>Religion : {elem.religion}</div>
                    <div className='technicals'>
                        <div className='like-btn' onClick={handleLike}>
                            <i className="fa fa-heart"></i>
                        </div>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
                <div className="second">
                    <div className='age'>Mother Tongue : {elem.mothertongue}</div>
                    <div className='age'>Profession : {elem.profession}</div>
                    <div className="description">
                            {elem.description}              
                    </div>
                </div>
            </div>
            <Link to={`/detailview/${elem._id}`}><button className='view-profile'>View Profile</button></Link>
            {/* <hr/> */}
        </div>
    </div>
  )
}

export default UserCard