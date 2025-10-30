import express from "express";
import { register } from "../user.controller";

const userRoutes = express.Router()


userRoutes.post("/register", register);

userRoutes.get('/', (req, res) => {
    res.send('User route....')
})

export default userRoutes


