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

//Function to Read FarmStand data by id
const getProductById = async (_id) => {
    const viewProduct = await Products.findById(_id);
    return viewProduct;
}

//Function that will create new products
const createInventory = async (products) => {
  const newInventory = await Products.create(products);
  return newInventory;
};


//Function that will update products by ID
const updateProduct = async (_id, updateData) => {
    const updatedProduct = await Products.findByIdAndUpdate(_id, updateData, {
        new: true,
    });
    return updatedProduct
}

//Function that will delete products by ID
const deleteProduct = async (_id) => {
    const deletedProduct = await Products.findByIdAndDelete(_id);
    return deletedProduct
};

module.exports = { createInventory, updateProduct, getProductById, deleteProduct };
