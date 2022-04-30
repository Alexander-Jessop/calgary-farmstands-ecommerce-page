const express = require("express");
const router = express.Router();

const { createInventory, updateProduct, getProductById, deleteProduct } = require("../db/model/FarmProducts")

const auth = require("../middleware/auth");

//Router to read newly created document
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const readProduct = await getProductById(id);
    res.send(readProduct);
    console.log(`Farmer information and inventory is: ${readProduct}`);
  } catch (err) {
    console.log(err.message);
    res.status(500).send();
  }
});

//Router to create a new document in MongoDb.
router.post("/create", async (req, res) => {
    const newInventory = req.body;
    try {
        const addedInventory = await createInventory(newInventory);
        console.log(`Added: ${addedInventory} with _id of: ${addedInventory._id}`);
        res.send(newInventory);
    } catch (err) {
        console.log(err.message);
    }
});



//Router to update an existing document
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    try {
        const updatedProduct = await updateProduct(id, updateData);
        console.log(`Updated product with id ${updatedProduct._id} to ${updatedProduct}`);
        res.send(updatedProduct);
    } catch (err) {
        console.log("Failed to edit product");
        console.log(err.message);
        res.status(500).send()
    }
});

//Router that will delete an existin document
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProduct = await deleteProduct(id);
    console.log(`Deleted product with id ${deletedProduct._id}`);
    res.send(deletedProduct);
  } catch (err) {
    console.log(err.message);
    res.status(500).send();
  };
});


module.exports = router;
