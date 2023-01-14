import Router from 'express'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

export const router =Router();
const prisma=new PrismaClient();

router.post('/login',async(req,res)=>{
    try{   const {nameOrEmail,password} =req.body;
    await prisma.user.findFirst({where:{OR:{name:nameOrEmail.toLowerCase(),email:nameOrEmail}}}).then(user=>{
        if(!user){
            res.json({message:"Invalid Username or Password"});
        };
        bcrypt.compare(password,(user?.password as string)).then(isCorrect=>{
            if(isCorrect){
                const payload={
                    id:user?.id,userName:user?.name,   
                }
                jwt.sign(payload,process.env.JWT_SECRET as string,{expiresIn:86400},(err,token)=>{
                    if(err) res.json({message:err});
                    res.json({message:"Success",token:`Bearer ${token}`})
    
                })
            }else{
                res.json({message:"Invalid UserName or Password"})
            }
        });
    })
   
    

}
    catch(error){
        res.json(error)
    };
 

})