const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  Product.findAll().then((prod) => {
    res.render("shop/product-list", {
      prods: prod,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findAll({ where: { id: prodId } })
    .then((product) => {
      res.render("shop/product-detail", {
        product: product[0],
        pageTitle: product.title,
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then((prod) => {
      res.render("shop/index", {
        prods: prod,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => console.log(err));
};

exports.getCart = (req, res, next) => {
  req.user.getCart().then((cart) => {
    return cart.getProducts().then((prod) => {
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: prod,
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchCart;
  req.user
    .getCart()
    .then((cart) => {
      fetchCart = cart;
      return cart.getProducts({
        where: {
          id: prodId,
        },
      });
    })
    .then((prod) => {
      let product;
      if (prod.length > 0) {
        product = prod[0];
      }
      let newQantity = 1;
      if (product) {
        // ....
      }
      return Product.findById(prodId).then((prod) => {
        return fetchCart.addProduct(prod, {
          through: { quantity: newQantity },
        });
      });
    });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
