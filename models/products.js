const fs = require('fs/promises');
const path = require('path');

const productsPath = path.join(__dirname, "products.json");

const getListProducts = async () => {
  const data = await fs.readFile(productsPath);
	return JSON.parse(data);
}

const getProductById = async (productId) => {
  const products = await getListProducts();
	const product =
		(await products.find((item) => item.id === productId)) || null;

	return product;
}

const getProductsByName = async (productName) => {
  const products = await getListProducts();
	const matchingProducts =
		products.filter((item) => item.name === productName) || null;

	return matchingProducts;
}



module.exports = {
	getListProducts,
	getProductById,
	getProductsByName,
};
