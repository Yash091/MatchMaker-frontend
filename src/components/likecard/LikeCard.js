import React from 'react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import "./LikeCard.css";

const LikeCard = (props) => {
    
  return (
    <>
        <div className='likecard-container'>
            <div className='avatar-pic'>
                <Avatar
                    size='2.5xl'
                    name='Prosper Otemuyiwa'
                    src='https://bit.ly/prosper-baba'
                />
            </div>
            <div className='brief'>
                <div className='name'>Name</div>
                <div className='line'></div>
                <div className='proff'>profession</div>
            </div>
            
        </div>
    </>
  )
}

export default LikeCard