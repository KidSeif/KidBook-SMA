import React from 'react'
import './Story.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'


const Story = (props) => {

    const {type , data} = props
  return (
    type === "new" ?
    <div className='story new'> 
     <span> Add Story </span>
        <FontAwesomeIcon icon={faPlusSquare} size='l' className='addIcon' />


    </div>
    :
    <div className='story old' style={{ backgroundImage: `url(${data.story_photo})` , backgroundSize: "cover",}}>
        <div className='userDetails'>
            <img src={data.user_photo} alt='pdp'/>
        </div>
        <span>{data.username}</span>
    </div>

  )
}

export default Story