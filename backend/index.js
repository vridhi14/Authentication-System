import express from 'express'; 
import { connectDB } from './db/connectDB.js';

const app = express(); 

app.get('/' , (req,res)=>{
    res.send("it is working well");
})

app.listen(3000 , ()=>{
    connectDB(); 
    console.log("server is running on port 3000"); 
})