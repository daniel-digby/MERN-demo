import { Request, Response } from "express";
import { mongo } from "mongoose";

const login = async (req: Request, res: Response): Promise<void> => {
	res.send("logged in: " + req.body.user);
};

const logout = async (req: Request, res: Response): Promise<void> => {
	res.send("logged out:" + req.body.user);
};

export { login, logout };
