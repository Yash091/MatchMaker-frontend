import React from 'react'
import LikeCard from '../../components/likecard/LikeCard'
import { UserContext } from '../../context/Context'

const LikeCards = () => {
    
    const {user , setUser} = UserContext();

    return (

        <div>
            LikeCards
        </div>
    )
}

export default LikeCards