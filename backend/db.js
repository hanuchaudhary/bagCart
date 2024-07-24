const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/productsDb");

const productSchema = mongoose.model("productSchema", {
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },

    old_price: {
        type: Number,
        required: true
    }
    , new_price: {
        type: Number,
        required: true
    }
    , date: {
        type: Date,
        default: Date.now()
    },
    isAvailable: {
        type :  Boolean,
        default : true
    }
})

module.exports = {productSchema};