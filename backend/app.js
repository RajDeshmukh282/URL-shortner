import express from "express";
import {nanoid} from "nanoid"

const app = express();
app.use(express.json());
app.post("/api/create", (req, res) => {// make a route
  const { url } = req.body
  res.send(nanoid(7))
});
app.listen(3000, () => {// listens to port 3000
  console.log("Server is running on port 3000");
});