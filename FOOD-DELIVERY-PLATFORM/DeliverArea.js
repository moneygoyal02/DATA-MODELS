import mongoose from "mongoose";
const Schema = mongoose.Schema;

const deliveryAreaSchema = new Schema({
  areaId: {
    type: String,
    required: true,
    unique: true,
  },
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  pincode: {
    type: String,
    required: true,
  },
  radius: {
    type: Number,
    required: true,
  }, // Radius in kilometers
});

export default mongoose.model("DeliveryArea", deliveryAreaSchema);
