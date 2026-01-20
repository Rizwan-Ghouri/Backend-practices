import exxpress from "express";
import comments from "../comment.js";

const prductsRoutes = exxpress.Router();

prductsRoutes.get("/",(req,res)=>{
    res.status(200).json({status:"200",message :"success",data:comments})
})

prductsRoutes.get('/:id',(req,res)=>{
    res.json({status:"200",message :"success",data:`this is product id ${req.params.id}`})
})

export default prductsRoutes;