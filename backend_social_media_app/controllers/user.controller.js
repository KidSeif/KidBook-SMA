const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.signup = (req,res) =>{
    
    const data = {
        firstname : req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password : bcrypt.hashSync(req.body.password,10),
        bio: req.body.bio,
        picture: req.body.picture,
        birthdate: req.body.birthdate
    }


    const _user = new User(data);

    _user.save().then(
        (createdUser) =>{
            res.status(200).json({message : "User added"})
        }
    ).catch(
        (err) => {
            res.status(400).json({message : "Problem while adding User"})
        }
    )

}


exports.signin = async (req,res) =>{

    // const email = req.body.email;
    // const password = req.body.password;
    //meme ecriture
    const {email, password} = req.body; 

    const user = await User.findOne({email : email})
    
 
    if(!user){ 
        return res.status(400).json({message : "User not founded"})
    }

    bcrypt.compare(password , user.password).then(
        (isMatch) =>{
            if (isMatch == false ){

                return res.status(400).json({message : "Incorrect Password"})

            }else{

               // Generate token
               const token =  jwt.sign(
                { data : { id: user._id , role: user.role } },
                process.env.KEY,
                {expiresIn : '1h'}
            
            )

            res.status(200).json(
                {
                    message : "User Signed in successfully",
                    token: token,
                    user : user
                }
            )



            }
        }
    )

}