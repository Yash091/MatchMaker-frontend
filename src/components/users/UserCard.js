import {React , useEffect , useContext , useState} from 'react'
import { Link } from 'react-router-dom'
import "./UserCard.css"
import { updateLike , updateDislike } from '../../service/api'
import { UserContext } from '../../context/Context'

const UserCard = ({elem}) => {

    const [like , setLike] = useState(false);
    const {user , setUser} = useContext(UserContext);

    const handleLike = () => {
        // socket.volatile.emit("liked",user._id,elem._id)
        const editLike = async(obj)=>{
            try {
                const data = await updateLike(obj);
                // console.log(data);
                window.localStorage.setItem("userInfo" , JSON.stringify(data.data));
            } catch (error) {
                console.log("It's an error!")
            }
        }
        editLike({"likedby":user._id , "liked":elem._id});
    }
    
    const handleDislike = () => {
        // socket.volatile.emit("liked",user._id,elem._id)
        const editDislike = async(obj)=>{
            try {
                const data = await updateDislike(obj);
                // console.log(data);
                window.localStorage.setItem("userInfo" , JSON.stringify(data.data));
            } catch (error) {
                console.log("It's an error!")
            }
        }
        editDislike({"dislikedby":user._id , "disliked":elem._id});
    }


    
    // useEffect(()=>{
    //     socket.on("getnotification",({sender,receiver})=>{
    //     })
    // },[socket])
  
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
                <div className={`init-heart ${like === false ? "" : "hidden"}`} ><i className="fa fa-heart-o" onClick={()=>{setLike(!like); handleLike()}}></i></div>
                   
                <div className={`heart ${like === false ? "hidden" : ""}`} ><i className="fa fa-solid fa-heart" onClick={()=>{setLike(!like); handleDislike()}}></i></div>
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