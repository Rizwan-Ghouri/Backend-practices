import express from 'express';

const usersRoute = express.Router();

usersRoute.get("/login",(req,res)=>{
    res.send("Login Route is working");
});
usersRoute.get("/Signup",(req,res)=>{
    res.send("Signup Route is working");
});

export default usersRoute;