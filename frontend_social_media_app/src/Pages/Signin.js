import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import UserService from "../Services/userService";
import { useNavigate } from "react-router-dom";

const Signin = () => {

    const Navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({

        email: '',
        password:'',

    })


    const formValidation= () =>{
        let status = true;
    
        let localError = {...errors}
    
    
        if(email === ""){
          localError.email = 'Email Required'
          status = false
    
        }
        if(password === "" || password.length < 8){
          localError.password = 'Wrong Password'
          status = false
    
        }
    
    
        setErrors(localError)
        console.log(localError)
    
    
        return status;
        
      }


      const singin = async(e) =>{

        e.preventDefault();
        console.log("form singin submitted");
        console.log( "formdata: " , email , password);
        

        if(formValidation()){

            const formdata = {
                
                email: email,
                password:password,
                
              }

            try {
                const response = await UserService.singin(formdata)
                console.log("response ===>",response);
                toast.success('User Signed In Successfully');
                // save user data in loca storage

                localStorage.setItem('user_data' , JSON.stringify(response.data.user))
                localStorage.setItem('token' , response.data.token)

                setEmail('')
                setPassword('')

                //redirection to home page

                Navigate("/home")


                
            } catch (error) {

                console.log(error);
                toast.error(error.response.data.message);
                
            }


        }else{
 
            console.log("Invalid Form");

        }
        
        

      }



  

  
  
  
    return (
      <div className="register">
        <div className="login-cover"></div>
        <Toaster />
        <div className="login-content">
          <div>
            <h1>KidBook</h1>
            <p> KidBook Social Media Application</p>
          </div>
  
  
          <div>
            <form onSubmit={singin}>
  
  
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
  
              <button className="btn signin" type="submit">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    );









};

export default Signin;
