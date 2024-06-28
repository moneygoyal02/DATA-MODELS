import mongoose from "mongoose";
const Schema = mongoose.Schema;

const deliveryLocationSchema = new Schema({
  locationId: {
    type: String,
    required: true,
    unique: true,
  },
  driverId: {
    type: Schema.Types.ObjectId,
    ref: "Driver",
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("DeliveryLocation", deliveryLocationSchema);
