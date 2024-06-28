import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Admin Schema
const adminSchema = new Schema({
    adminId: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true }
});

// Profit Schema
const profitSchema = new Schema({
    profitId: { type: String, required: true, unique: true },
    orderId: { type: Schema.Types.ObjectId, ref: 'Order' },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

// UserActivity Schema
const userActivitySchema = new Schema({
    activityId: { type: String, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    action: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

// OrderAnalytics Schema
const orderAnalyticsSchema = new Schema({
    analyticsId: { type: String, required: true, unique: true },
    date: { type: Date, required: true },
    totalOrders: { type: Number, default: 0 },
    totalAmount: { type: Number, default: 0 },
    avgOrderAmount: { type: Number, default: 0 }
});

// ProfitAnalytics Schema
const profitAnalyticsSchema = new Schema({
    analyticsId: { type: String, required: true, unique: true },
    date: { type: Date, required: true },
    totalProfit: { type: Number, default: 0 },
    avgProfitPerOrder: { type: Number, default: 0 }
});

module.exports = {
    Admin: mongoose.model('Admin', adminSchema),
    Profit: mongoose.model('Profit', profitSchema),
    UserActivity: mongoose.model('UserActivity', userActivitySchema),
    OrderAnalytics: mongoose.model('OrderAnalytics', orderAnalyticsSchema),
    ProfitAnalytics: mongoose.model('ProfitAnalytics', profitAnalyticsSchema)
};

