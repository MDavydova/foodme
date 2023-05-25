import mongoose from "mongoose";

const OrderedItemSchema = new mongoose.Schema({
  productQuantity: {
    type: Number,
    default: 0,
  },
  productName: {
    type: String,
  },
});

export default mongoose.model("OrderedItemModel", OrderedItemSchema);
