import e, { Router } from "express";
import {PrismaClient} from '@prisma/client'
import bcrypt from 'bcrypt';
import { verifyJwt } from "../utility/verify_jwt.js";

export const router=Router();
const prisma =new PrismaClient();

router.get('/register',,verifyJwt,async(req,res)=>{
    const user=await prisma.user.findMany()
    res.json(user);
})

router.post('/register',async(req,res)=>{
    try{ const {name ,email, password} =req.body;
    const takenUser =await prisma.user.findFirst({where:{
        name:name.toLowerCase()}})
    const takenUserEmail=await prisma.user.findUnique({where:{email}})
    if(takenUser || takenUserEmail){
        res.json({message:"User name or email has already been taken"})
    }else{
        const hashPassword=await bcrypt.hash(password,10);
        const result=await prisma.user.create({data:{
            name:name.toLowerCase(),email:email.toLowerCase(),password:hashPassword
        }})
        res.json(result);
    }}catch(error){
        res.json(error)
    }
   
    
})
