import mongoose from "mongoose";
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    restaurantId: { 
        type: String, 
        required: true, 
        unique: true
     },
    name: { 
        type: String,
         required: true 
        },
    address: {
         type: String, 
         required: true 
        },
    phone: {
         type: String,
          required: true
         },
    email: { 
        type: String, 
        required: true 
    },
    cuisines: [{ 
        type: String, 
        required: true 
    }],
    menus: [{ 
        type: Schema.Types.ObjectId,
         ref: 'Menu'
         }],
    reviews: [{ 
        type: Schema.Types.ObjectId,
         ref: 'Review'
         }],
    rating: { 
        type: Number,
         min: 0,
          max: 5, 
          default: 0 
        },
    location: {
         type: { type: String },
          coordinates: [Number]
         }, // GeoJSON for location
    openingHours: { 
        type: String, 
        required: true 
    },
    deliveryAvailable: { 
        type: Boolean, 
        default: false 
    },
    deliveryAreas: [{ 
        type: Schema.Types.ObjectId,
         ref: 'DeliveryArea'
         }]
});

export default mongoose.model("Restaurant", restaurantSchema);