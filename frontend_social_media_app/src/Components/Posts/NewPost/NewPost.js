import React from 'react'
import './NewPost.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

const NewPost = () => {
  return (
    <div className='newpost'>
        <div className='newpostDetails'>
        <div className='newpostProfileImage'>
            <img 
            src='https://images.pexels.com/photos/5951731/pexels-photo-5951731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='pdp'
            />
        </div>
        <div className='newpostTextBox'>
            <textarea placeholder="what's in your mind ...."></textarea>
        </div>
        </div> 

        <div className='newpostButtons'>
            <button>
            <FontAwesomeIcon icon={faShare} />
             {" "}Post it
            </button>
        </div>

    </div>
  )
}

export default NewPost