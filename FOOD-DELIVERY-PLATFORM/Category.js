import mongoose from "mongoose";
const Schema = mongoose.Schema;

const foodCategorySchema = new Schema({
  categoryId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export default mongoose.model("Category", foodCategorySchema);
