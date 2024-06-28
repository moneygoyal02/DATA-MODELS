import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    ratingId: { 
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
    ratedDate: { 
        type: Date, 
        default: Date.now
     }
});

export default mongoose.model("Rating", ratingSchema);