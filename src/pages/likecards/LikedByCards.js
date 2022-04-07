import React, { useContext, useEffect, useState } from 'react'
import LikeCard from '../../components/likecard/LikeCard'
import { UserContext } from '../../context/Context'
import { Spinner } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import "./LikeCards.css"

const LikedByCards = () => {
    const {user , setUser} = useContext(UserContext);
    // console.log(user);
    const [allLike , setAllLike] = useState([]);
    const [isLoading , setIsLoading] = useState(false);

    useEffect(()=>{
        setAllLike(user.likedby)
        setTimeout(() => {
            setIsLoading(true);
        }, 1000);
    },[user])
    
    return (

        <div className='like-page-container'>
        {
            isLoading === false ? <Spinner 
                thickness = '4px'
                speed = '0.65s'
                emptyColor = 'gray.200'
                color = '#ff477e'
                size = 'xl' 
            /> : (allLike !== null ? (allLike.length > 0 ? allLike.map(elem => {
                    return (<div>
                                
                                    <LikeCard elem={elem}/>
                                
                            </div>)
            }): "Hey you Brat, First like someone and then come here"): "Hey you Brat, First like someone and then come here")
        }
        </div>
    )
}

export default LikedByCards