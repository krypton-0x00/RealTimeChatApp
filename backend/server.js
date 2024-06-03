import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
//file imports
import authRoute from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

//variables
const PORT = process.env.PORT || 5000;
const app = express();
//config
dotenv.config();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connectToMongoDB();
});
