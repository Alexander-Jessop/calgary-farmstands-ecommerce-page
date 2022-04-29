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
    }
},
    {timestamps: true});

const Inventory = mongoose.model("inventory", InventorySchema);

//Function to Read FarmStand data by id
const getFarmStandById = async (_id) => {
    const viewFarmStand = await Inventory.findById(_id);
    return viewFarmStand;
}

module.exports = {getFarmStandById};

