import React from 'react'
import { Link } from 'react-router-dom'
import "./UserCard.css"

const UserCard = ({elem}) => {
  return (
    <div className="user-card-container">
        <div className="profile-pic">
            <img src={elem.picture}/>
        </div>
        <div className='info'>
            <div className="details">
                <div className="first">
                    <div className="name">{elem.name}</div>
                    <div className='age'>D.O.B : {elem.dob}</div>
                    <div className='religion'>Religion : {elem.religion}</div>
                    <div className='age'>Mother Tongue : {elem.mothertongue}</div>
                    <div className='age'>Profession : {elem.profession}</div>
                </div>
                <div className="second">
                    <div className='technicals'>
                        <i className="fa fa-heart"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <Link to={`/detailview/${elem._id}`}><button className='view-profile'>View Profile</button></Link>
                </div>
            </div>
            {/* <hr/> */}
            <div className="description">
                    {elem.description}              
            </div>
        </div>
    </div>
  )
}

export default UserCard