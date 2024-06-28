import exp from "constants";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const suggestionSchema = new Schema({
  suggestionId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  suggestedItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "MenuItem",
    },
  ],
});

export default mongoose.model("Suggestion", suggestionSchema);
