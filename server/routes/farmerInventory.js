const express = require("express");
const router = express.Router();

const Inventory = require("../db/model/farmInventory");

const auth = require("../middleware/auth");

//GET method to retrieve farmstand inventory by Id
router.get("/:id", async (req, res) => {
    try {
        const inventory = await Inventory.findById(req.params.id);
        res.send(inventory);
        console.log(`Farmer information and inventory is: ${inventory}`);
    } catch (err) {
        console.log(err.message);
        res.status(500).send();
    }
});


module.exports = router;
