const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    items: [{
        book: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        },
        quantity: {
            type: Number,
            default: 1
        }  
    }],
    totalAmount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;

