import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },

  {
    timestamps: true,
  }
);

const suuqSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    required: true,
  },
  itemType: {
    type: String,
    default: "guri",
  },
  address: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  numReviews: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0.0,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  ownerItem: {
    type: String,
    // required: true,
  },
  seller: {
    type: String,
  },
  category: {
    type: String,
    default: "Suuq",
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Suuq = mongoose.model("Suuq", suuqSchema);
export default Suuq;
