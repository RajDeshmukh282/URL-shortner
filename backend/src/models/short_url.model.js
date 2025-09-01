import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({
  full_url: {
    type: String,
    required: true,
  },
  short_url: {
    type: String,
    required: true,
    index :true,
    unique:true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // assumes you have a User model
  },
  clicks: {
    type: Number,
    required :true,
    default: 0,
  },
}); // adds createdAt & updatedAt automatically

const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema);

export default ShortUrl;
 