const productsService = require("../models/products");

const HttpError = require("../helpers/HttpError");

const getListProducts = async (_, res, next) => {
	try {
		const data = await productsService.getListProducts();

		if (!data) throw HttpError(404, `Not found`);

		res.json(data);
	} catch (error) {
		next(error);
	}
};

const getProductById = async (req, res, next) => {
	try {
		const id = req.params.productId;
		const productById = await productsService.getProductById(id);

		if (!productById)
			throw HttpError(404, `Product with this ID ${id} not found`);

		res.json(productById);
	} catch (error) {
		next(error);
	}
};

const getProductsByName = async (req, res, next) => {
	try {
		const name = req.params.productName;
		const productsByName = await productsService.getProductsByName(name);

		if (!productsByName)
			throw HttpError(404, `Products with this name ${Id} not found`);

		res.json(productsByName);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getListProducts,
	getProductById,
	getProductsByName,
};
