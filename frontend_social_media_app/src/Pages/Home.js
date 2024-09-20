import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar'
import UsernameCard from "../Components/UsernameCard/UsernameCard.js";
import Sidebar from "../Components/Sidebar/Sidebar.js";
import Stories from "../Components/Stories/Stories.js";
import Requests from "../Components/Requests/Requests.js";
import Posts from "../Components/Posts/Posts.js";

const Home = () =>{


    const [connectedUser,setConnectedUser]= useState({})
    const Navigate = useNavigate()

    const getConnectedUserData = () =>{

        setConnectedUser( JSON.parse(localStorage.getItem('user_data')) );


    }

    useEffect(()=>{


        getConnectedUserData()

        if (connectedUser == null) { // user not connected
            //redirection vers login page
            Navigate('/Signin')

            
        }

// eslint-disable-next-line 
    },[]);





    return(
        <>
        <Navbar /> 
        <div className="layout-app"> 
            {/* left box */}

            <div style={{width:"25%"}}>  
            <UsernameCard user={connectedUser} />
            <Sidebar/>
            </div>



            {/* middle box */}
           <div style={{width:"50%"}}>

            <Stories/>
            <Posts />

           </div>

           {/* right box */}
            <div style={{width:"25%"}}>
            <Requests />
            </div>
        </div>

          {/* <h1>Welcome {connectedUser.lastname + ' ' + connectedUser.firstname}</h1> */}
        </>
    )





}


export default Home;