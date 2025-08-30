import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongose.config.js";
import urlShema from "./src/models/shorturl.model.js";

dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json());

connectDB();

app.post("/api/create", async (req, res) => {
  try {
    const { url } = req.body;

    // generate short id
    const shortId = nanoid(7);

    // create new doc in MongoDB
    const newUrl = new urlShema({
      full_url: url,   // make sure this matches your schema
      short_url: shortId,
    });

    await newUrl.save();

    console.log("Saved:", newUrl);

    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("🚀 Server is running on port 3000");
});
