import { Request, Response } from 'express';
import User, { IUser  } from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config/config';

const createToken = (user: IUser) => {
    return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
        expiresIn: 86400
    });
}

export const signup = async (req: Request, res: Response): Promise<Response> => {
    if(!req.body.name || !req.body.lastname || !req.body.email || !req.body.password) {
        return res.status(400).json({msg: 'Please. Send your name, lastname, email and password'});
    }
    // Check Registered Mail
    const user = await User.findOne({email: req.body.email});
    if(user) {
        return res.status(400).json({msg: 'The user already exists'});
    }else{
        const newUser = new User(req.body);
        await newUser.save();
        return res.status(201).json(newUser);
    }
}

export const signin = async (req: Request, res: Response) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({msg: 'Please. Send your email and password'});
    }

    const user = await User.findOne({email: req.body.email});
    if(!user) {
        return res.status(400).json({msg: 'The user does not exists'});
    }

    const isMatch = await user.comparePassword(req.body.password);
    if(isMatch) {
        return res.status(200).json({
            msg: 'Logged in',
            token: createToken(user)
        });
    }else{
        return res.status(400).json({msg: 'The email or password are incorrect'});
    }
}