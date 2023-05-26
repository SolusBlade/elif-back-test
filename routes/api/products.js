const express = require("express");
const {
	getListProducts,
	getProductById,
	getProductsByName,
} = require("../../controllers/productsController");


const router = express.Router();

router.get("/", getListProducts);

router.get("/:productId", getProductById);

router.get("/:productName", getProductsByName);

module.exports = router;
