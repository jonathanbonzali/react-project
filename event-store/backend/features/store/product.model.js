import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  category: {
    type: String,
  },
  total: {
    type: String,
    required: "Total is required",
  },
  price: {
    type: String,
    required: "Price is required",
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  description: {
    type: String,
    trim: true,
  },
});

export default mongoose.model("Product", ProductSchema);
