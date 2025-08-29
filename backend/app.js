import express from "express";

const app = express();
app.get("/", (req, res) => {// make a route
  res.send("Hello World!");
});
app.listen(3000, () => {// listens to port 3000
  console.log("Server is running on port 3000");
});