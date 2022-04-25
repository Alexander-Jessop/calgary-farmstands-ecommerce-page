const mongoose = require("mongoose");
const { Schema } = mongoose;

const InventorySchema = new Schema({
    hours: {
        type: String,
        required: true,
    },
    vendor_name: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    community: {
        type: String,
        required: true,
    },
    product_description: {
        type: String,
    },
});

const Inventory = mongoose.model("inventory", InventorySchema);

module.exports = Inventory;

