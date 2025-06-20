import { Request, Response, NextFunction } from 'express';
import userService from '../services/user.service';
import { log } from 'node:console';

const createUser = async (req: Request, res: Response) => {
    console.log("body is:", req.body); 
    const { username } = req.body;
  
    const user = await userService.createUser(username);
    res.status(201).json(user);
};

const getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        console.log("Fetching user by ID:", req.params.id);
        
        const { id } = req.params;
        const user = await userService.getUserById(parseInt(id));
        if (!user) {
             res.status(404).json({ message: "User not found" }); // ใช้ 404 แทน 403
        }
        res.status(200).json(user);
    } catch (error: any) {
        next(error); // ส่ง error ไปยัง middleware จัดการ error
    }
};
const gainExp = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { gainExp } = req.body;
    try {
        const user = await userService.gainExp(parseInt(id), gainExp);
        res.status(200).json(user);
    } catch (error: string | any) {
        res.status(400).json({ message: error.message });
    }
}

const getTopUsers = async (req: Request, res: Response) => {
    console.log("Fetching top users");
    
    const users = await userService.getTopUsers();
    res.status(200).json(users);
}

export default {
  createUser,
  getUserById,
  gainExp,
  getTopUsers,
};