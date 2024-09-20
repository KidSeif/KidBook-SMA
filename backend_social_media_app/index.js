const express = require('express');
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
app.use(express.json())
app.use(cors())


// Backend application test dev branch
// second test

//test pull




app.listen(process.env.PORT,()=>{ 
    console.log(`app listening on port ${process.env.PORT}`);
})
 
  
mongoose.connect(process.env.MONGODB_URL)

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open" , ()=>{
    console.log("database connected successfully ...");
})

app.get('/',(req,res)=>{
    res.send('hello social media app de KID ')
})


const userRoutes = require('./routes/user.router')
app.use('/users',userRoutes) 


