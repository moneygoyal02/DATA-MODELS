import mongoose from "mongoose";
const Schema = mongoose.Schema;

const driverSchema = new Schema({
  driverId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  vehicleNumber: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["available", "busy", "offline"],
    default: "available",
  },
  currentOrder: {
    type: Schema.Types.ObjectId,
    ref: "Order",
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: "DeliveryLocation",
  }, // Added location reference
});

export default mongoose.model("Driver", driverSchema);
