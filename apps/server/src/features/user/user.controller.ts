import { Request, Response } from "express";
//import { User } from "@repo/types";

export const register = (req: Request, res: Response) => {
    /*  const user: User = {
         id: "1",
         name: req.body.name,
         email: req.body.email,
     };
     res.status(201).json(user); */
    res.send("OK")
};
