const express = require("express");
const router = express.Router();

const { getFarmStandById } = require("../db/model/farmInventory");

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


module.exports = router;
