const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({

    id: String,

    products: {
        type: [{
            fruits: [String],
            vegtables: [String],
            meats: [String],
            grains: [String],
            dairy: [String],
        }]
    },

    prices: [Number],

    Quauntity: [Number],

    description: String,

});

const Products = mongoose.model("product", ProductSchema);

const createInventory = async (products) => {
  const newInventory = await Products.create(products);
  return newInventory;
};

module.exports = { createInventory };
