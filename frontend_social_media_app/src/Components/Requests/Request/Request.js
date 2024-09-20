import React from 'react'
import "./Request.css"

const Request = (props) => {


  const {data} = props;

  return (
    <div className='request'>

        <div className='requestDetails'>
        <img className='userImage' 
            src= {data.profileImage} 
            alt=''
            />
            <p>
             <b>{data.username}</b> wants to add you to friend
            </p>
        </div>

        <div className='requestAnswer'>

        <button className='acceptButton'>Accept</button>
        <button className='declineButton'>Decline</button>



        </div>
        
    
    
    
    </div>
  )
}

export default Request