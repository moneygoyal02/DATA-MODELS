import mongoose from "mongoose";
const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
  menuItemId: {
    type: String,
    required: true,
    unique: true,
  },
  menuId: {
    type: Schema.Types.ObjectId,
    ref: "Menu",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },

  availability: {
    type: Boolean,
    default: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

export default mongoose.model("MenuItem", menuItemSchema);
