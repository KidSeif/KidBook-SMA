import React from 'react'
import './Requests.css'
import Request from './Request/Request'

const Requests = () => {

    const requests =[
      {
        username: 'Omar Mastour',
        profileImage: 
        'https://images.pexels.com/photos/5951731/pexels-photo-5951731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },

      {
        username: 'Amir Bouallegui',
        profileImage: 
        'https://images.pexels.com/photos/4925945/pexels-photo-4925945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },

      {
        username: 'Aziz abdellaoui',
        profileImage: 
        'https://images.pexels.com/photos/6584746/pexels-photo-6584746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ]


  return (
    <div className='requests'>
        <div className='requests-title'>
            <h4> Requests </h4>
            <h4 className='request_nbr'> 15 </h4>
        </div>
        {
          requests.map((req)=>(<Request data={req} />))
        }

    </div>
  )
}

export default Requests