import {React , useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import "./UserCard.css"
import { updateLike } from '../../service/api'

const UserCard = ({elem , socket , user}) => {

    const [like , setLike] = useState(false);

    const handleLike = () => {
        socket.volatile.emit("liked",user._id,elem._id)
    }
    
    useEffect(()=>{
        const editLike = async(obj)=>{
            try {
                const data = await updateLike(obj);
            } catch (error) {
                console.log("It's an error!")
            }
        }
        socket.on("getnotification",({sender,receiver})=>{
            editLike({"likedby":sender , "liked":receiver});
        })
    },[socket])
  
    return (
        
    <div className="user-card-container">
        <div className="profile-pic">
            <img src={elem.picture}/>
        </div>
        <div className='info'>
            <div className='name-proff'>
                <div className = 'name'
                style={{display: "inline-block"}}>
                    {elem.name}
                <div className={`init-heart ${like === false ? "" : "hidden"}`} onClick={()=>setLike(!like)}><i class="fa fa-heart-o"></i></div>
                   
                <div className={`heart ${like === false ? "hidden" : ""}`} onClick={()=>{setLike(!like); handleLike()}}><i class="fa fa-solid fa-heart"></i></div>
                </div>
                <div className='proff'>{elem.profession}</div>
            </div>
            <div className="desc">
                <div className='age'>D.O.B : {elem.dob}</div>
                <div className='religion'>Religion : {elem.religion}</div>
                <div className='age'>Mother Tongue : {elem.mothertongue}</div>
                <div className="description"> {elem.description} </div>
            </div>
            <div className="button">
                <Link to={`/detailview/${elem._id}`}><button className='view-profile'>View Profile</button></Link>    
            </div>
        </div>
    </div>
  )
}

export default UserCard