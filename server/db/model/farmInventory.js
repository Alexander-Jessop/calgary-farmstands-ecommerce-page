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

    products: {
        type: [{
            fruits: [String],
            vegtables: [String],
            meats: [String],
            grains: [String],
            dairy: [String],
        }]
    },

    id: String,

    prices: [Number],

    description: String,

},
    {timestamps: true});

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

