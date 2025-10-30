import { User } from "@repo/types";
import express from "express";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
    const user: User = {
        id: "1",
        name: "Mani",
        email: "mani@mail.com",
    };
    res.status(201).json(user);
    //res.send("Server is running!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

/* import express from "express";
import userRoutes from "./features/user/routes/public.routes";
// import userRoutes from "./features/user/routes/public.routes";


const app = express();
app.use(express.json());

// Public routes
app.use("/user", userRoutes);


app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
 */