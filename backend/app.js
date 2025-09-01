import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongose.config.js";
import urlShema from "./src/models/short_url.model.js";
import short_url from "./src/routes/short_url.route.js";

dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json());

connectDB();

// ✅ POST route to create a new short URL
app.use("/api/create",short_url);

// ✅ GET route to handle redirection (MOVED HERE)
app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const url = await urlShema.findOne({ short_url: id });

    if (url) {
      // You might want to increment a click counter here
      // url.clicks++;
      // await url.save();
      
      return res.redirect(url.full_url);
    } else {
      return res.status(404).send("URL not found");
    }
  } catch (error) {
     console.error(error);
     res.status(500).json({ error: "Server error" });
  }
});


app.listen(3000, () => {
  console.log("🚀 Server is running on port 3000");
}); 