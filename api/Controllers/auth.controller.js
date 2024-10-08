import userCred from "../models/userCred.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../Utils/error.js';
import jwt from 'jsonwebtoken'

export const singup=async(req,res,next)=>{
    try{
    const {username,email,password}=req.body;
    const hashPassword = bcryptjs.hashSync(password,12);
    const newUser=new userCred({username,email,password:hashPassword})
    
        await newUser.save()
        res.status(201).json("User created successfully !");
    }
    catch(error){
        console.log(error);
        next(error);
    }
};

export const signin = async(req,res,next)=>{
    const {email,password}=req.body;
    try{
        const validUser= await userCred.findOne({email});
        if(!validUser) return next(errorHandler(404,'User not found!'));
        const validPassword=bcryptjs.compareSync(password,validUser.password);
        if(!validPassword) return next(errorHandler(404,'Incorrect password!'));
        const token = jwt.sign({ id: validUser._id },process.env.JWT_SECRET)
        const {password:hashedPassword, ...rest}=validUser._doc;
        res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest);
    }
    catch (error) {
        next(error);
    }
    }

export const google = async (req, res, next) => {
        try {
          const user = await userCred.findOne({ email: req.body.email });
          if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const { password: pass, ...rest } = user._doc;
            res
              .cookie('access_token', token, { httpOnly: true })
              .status(200)
              .json(rest);
          } else {
            const generatedPassword =
              Math.random().toString(36).slice(-9) +
              Math.random().toString(36).slice(-9);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
            const newUser = new userCred({
              username:
                req.body.name.split(' ').join('').toLowerCase() +
                Math.random().toString(36).slice(-4),
              email: req.body.email,
              password: hashedPassword,
              avatar: req.body.photo,
            });
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            const { password: pass, ...rest } = newUser._doc;
            res
              .cookie('access_token', token, { httpOnly: true })
              .status(200)
              .json(rest);
          }
        } catch (error) {
          next(error);
        }
      };
export const signOut = async (req, res, next) => {
        try {
          res.clearCookie('access_token');
          res.status(200).json('User has been logged out!');
        } catch (error) {
          next(error);
        }
      };