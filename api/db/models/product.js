const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: null,
      required: "Name is required!",
      trim: true,
    },
    category: {
      type: String,
      default: null,
      required: "Category is required!",
      trim: true,
    },
    description: {
      type: String,
      default: null,
      required: "Description is required!",
      trim: true,
    },
    brand: {
      type: String,
      default: null,
      required: "Brand is required!",
      trim: true,
    },
    price: {
      type: Number,
      default: null,
      required: "Price is required!",
      trim: true,
    },
  },
  { timestamps: {} }
);

module.exports = mongoose.model("Product", ProductSchema);
