const { Schema, model } = require("mongoose");

const prizeSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name is required",
      trim: true,
    },
    description: {
        type: String,
        required: "Description is required"
    },
    image_url: {
        type: String,
        required: "Image is required"
    },
    quantity: {
        type: Number,
        default: 0
    }
  },
  {
    timestamps: true,
  }
);

const Prize = model("Prize", prizeSchema);
module.exports = { Prize };