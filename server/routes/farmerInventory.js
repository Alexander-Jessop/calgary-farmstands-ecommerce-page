const express = require("express");
const router = express.Router();

const { createInventory, getFarmStandById } = require("../db/model/farmInventory");

const auth = require("../middleware/auth");

//GET method to retrieve farmstand inventory by Id
router.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const readInventory = await getFarmStandById(id);
        res.send(readInventory);
        console.log(`Farmer information and inventory is: ${readInventory}`);
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


module.exports = router;
