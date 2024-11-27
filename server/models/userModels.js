const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  auth0Id: { 
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  profilePicture: {
    publicId: String,
    url: String
  },
  phoneNumber: {
    type: String
  },

  // User Role and Status
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  isActive: {
    type: Boolean,
    default: true
  },

  // Library and Purchased Books
  purchasedBooks: [
    {
      book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true
      },
      purchasedDate: {
        type: Date,
        default: Date.now
      }
    }
  ],

  // Cart
  cart: [
    {
      book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
      },
      addedAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  // Wishlist
  wishlist: [
    {
      book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
      },
      addedAt: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
