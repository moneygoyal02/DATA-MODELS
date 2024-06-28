import mongoose from "mongoose";
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    reviewId: { 
        type: String,
         required: true, 
         unique: true
         },
    userId: { 
        type: Schema.Types.ObjectId,
         ref: 'User' 
        },
    restaurantId: { 
        type: Schema.Types.ObjectId,
         ref: 'Restaurant' 
        },
    rating: { 
        type: Number,
         required: true,
          min: 1, 
          max: 5
         },
    comment: { 
        type: String,
         required: true 
        },
    reviewDate: { 
        type: Date, 
        default: Date.now 
    }
});

export default mongoose.model("Review", reviewSchema);