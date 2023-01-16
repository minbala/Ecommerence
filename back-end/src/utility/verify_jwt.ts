
import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import { User } from '@prisma/client';

interface JwtPayload{
    id:number;
    name:string;
}
export const verifyJwt =(req:Request,res:Response,next:NextFunction)=>{
  const token =(req.headers['x-access-token'] as string)?.split(' ')[1];
  if(token){
    jwt.verify(token,process.env.JWT_SECRET as string,(err,payload)=>{
        if(err){ return res.json({
            isLoggedIn:false,
            message:"Failed to authenticate"
        });}
        else


        { 
          req.user={} as User;
          req.user!.id=(payload as JwtPayload)?.id ;
        req.user!.name=(payload as JwtPayload)?.name;
    next()}

    })
  }else{
    return res.json({isLoggedIn:false,message:"Plz Sig Up First."})
  }
}