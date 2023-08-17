const fs = require("fs");
const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, price) {
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };

      if (!err) {
        JSON.parse(fileContent);
      }
      const productExistsInd = cart.products.find((prod) => prod.id === id);
      const productExists = cart.products[productExistsInd];
      let updatedProduct;
      if (productExists) {
        updatedProduct = { ...productExists };
        updatedProduct.qty++;
        cart.products = [...cart.products];
        cart.products[productExistsInd] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + price;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
