import express from "express";
import dotenv from "dotenv";

import authRoute from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connectToMongoDB();
});
