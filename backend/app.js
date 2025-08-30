import express from "express";
import {nanoid} from "nanoid"
import dotenv from "dotenv"
import connectDB from "./src/config/mongose.config.js";

dotenv.config({ path: "./.env" });


const app = express();
app.use(express.json());

connectDB();
app.post("/api/create", (req, res) => {// make a route
  const { url } = req.body
  console.log(url);
  
  res.send(nanoid(7))
});
app.listen(3000, () => {// listens to port 3000
  console.log("Server is running on port 3000");
});