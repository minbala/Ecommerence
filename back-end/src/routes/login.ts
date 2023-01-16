import Router from 'express'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { Tracing } from 'trace_events';

export const router =Router();
const prisma=new PrismaClient();

router.post('/login',async(req,res)=>{
    try{
       const {name ,password} =req.body;
       const nameOrEmail =name as string;
    await prisma.user.findFirst({where:{OR:[{name:nameOrEmail.toLowerCase()},{email:nameOrEmail}]}}).then(user=>{
        if(!user){
             return res.json({message:"Invalid Username or Password"});
        };
        bcrypt.compare(password,(user?.password as string)).then(isCorrect=>{
            if(isCorrect){
                const payload={
                    id:user?.id,name:user?.name,   
                }
                jwt.sign(payload,process.env.JWT_SECRET as string,{expiresIn:86400},(err,token)=>{
                    if(err) return res.json({message:err});
                    return res.json({message:"Success",token:`Bearer ${token}`})
    
                })
            }else{
                return res.json({message:"Invalid UserName or Password"})
            }
        });
    })


}catch(error){
    res.json(error)
}

})