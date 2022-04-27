const mongoose = require("mongoose");
const { Schema } = mongoose;

const InventorySchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    hours: {
        type: String,
    },
    vendor_name: {
        type: String,
    },
    address: {
        type: String,
    },
    community: {
        type: String,
    },
    product_description: {
        type: String,
    },
    fruits: {
        type: [String],
    },
    vegtables: {
        type: [String],
    },
    poultry: {
        type: [String],
    },
    grains: {
        type: [String],
    },
    dairy: {
        type: [String],
    },
});

const Inventory = mongoose.model("inventory", InventorySchema);

//Function to Read FarmStand data by id
const getFarmStandById = async (_id) => {
    const viewFarmStand = await Inventory.findById(_id);
    return viewFarmStand;
}


//Function to create new inventory items in MongoDB.
const createInventory = async (inventory) => {
    const newInventory = await Inventory.create(inventory);
    return newInventory;
};

module.exports = { createInventory, getFarmStandById };

