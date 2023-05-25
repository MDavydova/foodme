import mongoose from "mongoose";

import OrderedItemModel from "./OrderedItem.js";

const OrderSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: new Date(),
    },
    id: {
      type: String,
    },
    shop: {
      type: String,
    },
    shopLocation: {
      type: String,
    },
    userLocation: {
      type: String,
    },
    phone: {
      type: Number,
    },
    cost: {
      type: Number,
    },
    email: {
      type: String,
    },
    orderedItems: [OrderedItemModel.schema],
  },
  { timestamps: true }
);

export default mongoose.model("OrderModel", OrderSchema);
