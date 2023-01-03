import { Router } from "express";
import {PrismaClient} from '@prisma/client'

export const router=Router();
const prisma =new PrismaClient();

router.get('/user',async(req,res)=>{
    const user=await prisma.user.findUnique({where:{email:req.body.email}})
    res.json(user);
})

router.post('/user',async(req,res)=>{
    const {name,email, password} =req.body;
    const result=await prisma.user.create({data:{
        name,email,password
    }})
    res.json(result);
})
