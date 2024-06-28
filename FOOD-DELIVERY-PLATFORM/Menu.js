import mongoose from "mongoose";
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  menuId: {
    type: String,
    required: true,
    unique: true,
  },
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "MenuItem",
    },
  ],
});

export default mongoose.model("Menu", menuSchema);
