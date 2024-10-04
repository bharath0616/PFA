import bcryptjs from 'bcryptjs';
import userCred from '../models/userCred.model.js';

import { errorHandler } from '../Utils/error.js';

export const test = (req, res) => {
  res.json({  
    message: 'Api route is working!',
  });
};

export const updateUser = async (req, res, next) => {
  try {
    console.log("Request body:", req.body);
    console.log("User ID from token:", req.user.id);
    console.log("User ID from params:", req.params.id);

    if (req.user.id !== req.params.id) {
      return next(errorHandler(401, 'You can only update your own account!'));
    }

    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await userCred.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    if (!updatedUser) return next(errorHandler(404, 'User not found!'));

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    console.error("Error in updateUser:", error);
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, 'You can only delete your own account!'));
  try {
    await userCred.findByIdAndDelete(req.params.id);
    res.clearCookie('access_token');
    res.status(200).json('User has been deleted!');
  } catch (error) {
    next(error);
  }
};


export const getUser = async (req, res, next) => {
  try {
    
    const user = await userCred.findById(req.params.id);
  
    if (!user) return next(errorHandler(404, 'User not found!'));
  
    const { password: pass, ...rest } = user._doc;
  
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};