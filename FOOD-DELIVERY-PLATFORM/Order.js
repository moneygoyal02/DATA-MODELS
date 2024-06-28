import exp from "constants";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderId: { 
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
    items: [{
         menuItemId: { 
            type: Schema.Types.ObjectId, 
            ref: 'MenuItem'
         },
          quantity: Number 
        }],
    totalAmount: { 
        type: Number, 
        required: true
     },
    orderDate: { 
        type: Date,
         default: Date.now 
        },
    status: { 
        type: String, 
        enum: ['pending', 'preparing', 'delivered', 'cancelled'],
         default: 'pending'
         },
    deliveryAddress: {
         type: Schema.Types.ObjectId, 
         ref: 'Address',
          required: true
         },
    paymentMethod: { 
        type: String,
         enum: ['credit_card', 'debit_card', 'net_banking', 'cash_on_delivery'],
          required: true
         },
    deliveryTime: { 
        type: Date
     },
    deliveryStatus: {
         type: String,
          enum: ['pending', 'out_for_delivery', 'delivered'],
           default: 'pending'
         },
    driver: { 
        type: Schema.Types.ObjectId,
         ref: 'Driver'
         } 
});

export default mongoose.model('Order', orderSchema);