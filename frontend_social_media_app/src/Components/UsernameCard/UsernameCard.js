import React from 'react'
import './UsernameCard.css'

const UsernameCard = (props) => {
  return (
    <div className='username_card'>
        <div className='username_img'>
          {
            props.user.picture === "" ?
            <h3 className='profile_caracter'> {props.user.firstname[0] + props.user.lastname[0]} </h3> :
            <img 
            src='https://images.pexels.com/photos/27849560/pexels-photo-27849560/free-photo-of-homme-couple-amour-gens.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            />
          }
        </div>

        <div className='username_info'>

            <h3 className='username'> {props.user.firstname + ' ' + props.user.lastname }</h3>
            <span className='small'>@Seifkidd</span>

 
        </div>
      
    </div>
  )
}

export default UsernameCard
