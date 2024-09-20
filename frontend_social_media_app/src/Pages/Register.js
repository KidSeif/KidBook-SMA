import React, { useState } from "react";
import UserService from "../Services/userService";
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Bio, setBio] = useState("");
  const [picture, setPicture] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [errors, setErrors] = useState({
      firstname: '',
      lastname: '',
      email: '',
      password:'',
      bio: '',
      birthdate: '',
      picture: '',
  })

  const formValidation= () =>{
    let status = true;

    let localError = {...errors}


    if(firstname === ""){
      localError.firstname = 'Firstname Required'
      status = false
    }
    if(lastname === ""){
      localError.lastname = 'Lastname Required'
      status = false

    }
    if(email === ""){
      localError.email = 'Email Required'
      status = false

    }
    if(password === "" || password.length < 8){
      localError.password = 'Password Required and min 8 caracters'
      status = false

    }


    setErrors(localError)
    console.log(localError)


    return status;
    
  }


  const register = async (e) =>{

    e.preventDefault();

    if(formValidation()){

      const formdata = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password:password,
        bio: Bio,
        birthdate: birthdate,
        picture: picture,
      }

      try {

        const response = await UserService.register(formdata)
        console.log("response ===>",response);
        toast.success('User created Successfully');
  
        setFirstname('')
        setLastname('')
        setEmail('')
        setPassword('')
        setBio('')
        setPicture('')
        setPicture('')
        
      } catch (error) {
  
        console.log(error);
        toast.error('Error while signing!');
  
        
        
      }

      
    }else{
      console.log("Invalid Form");
    }
    

  }

  return (
    <div className="register">
      <div className="register-cover"></div>
      <Toaster />
      <div className="register-content">
        <div>
          <h1>KidBook</h1>
          <p> KidBook Social Media Application</p>
        </div>


        <div>
          <form onSubmit={register}>

            <div className="form-group">
              <label>Firstname</label>
              <input
                className="input"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />

              {
                errors.firstname !== " " ? <div style={{textAlign:'left', color:'orangered'}}> {errors.firstname} </div> : ''
              }
            </div>

            <div className="form-group">
              <label>Lastname</label>
              <input
                className="input"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              {
                errors.lastname !== " " ? <div style={{textAlign:'left', color:'orangered'}}> {errors.lastname} </div> : ''
              }
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {
                errors.email !== " " ? <div style={{textAlign:'left', color:'orangered'}}> {errors.email} </div> : ''
              }
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {
                errors.password !== " " ? <div style={{textAlign:'left', color:'orangered'}}> {errors.password} </div> : ''
              }
            </div>

            <div className="form-group">
              <label>Bio</label>
              <textarea value={Bio} onChange={(e) => setBio(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Birthdate</label>
              <input
                className="input"
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />

            </div>

            <div className="form-group">
              <label>Picture</label>
              <input
                className="input"
                type="file"
              />
            </div>

            <button className="btn signup" type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
