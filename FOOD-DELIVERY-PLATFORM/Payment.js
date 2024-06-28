import mongoose from "mongoose";
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    paymentId: { 
        type: String,
         required: true,
          unique: true
         },
    orderId: { 
        type: Schema.Types.ObjectId,
         ref: 'Order'
         },
    userId: {
         type: Schema.Types.ObjectId,
          ref: 'User'
         },
    amount: { 
        type: Number, 
        required: true
     },
    paymentDate: {
         type: Date,
          default: Date.now 
        },
    paymentMethod: {
         type: String,
          enum: ['credit_card', 'debit_card', 'net_banking', 'cash_on_delivery'], 
          required: true
         },
    status: { 
        type: String, 
        enum: ['pending', 'completed', 'failed'],
         default: 'pending' 
        }
});

export default mongoose.model("Payment", paymentSchema);