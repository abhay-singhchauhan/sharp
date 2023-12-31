const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  req.user
    .createProduct({
      title: title,
      price: price,
      imageUrl: imageUrl,
      description: description,
    })
    .then((ress) => {
      console.log("created product");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  // Product.findByPk(prodId)
  req.user.getProducts({ where: { id: prodId } }).then((products) => {
    const product = products[0];
    if (!product) {
      return res.redirect("/");
    }
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      editing: editMode,
      product: product,
    });
  });
};

exports.postEditProduct = async (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  let prod = await Product.findByPk(prodId);
  prod.title = updatedTitle;
  prod.price = updatedPrice;
  prod.imageUrl = updatedImageUrl;
  prod.description = updatedDesc;

  await prod.save();

  res.redirect("/admin/products");
};

exports.getProducts = (req, res, next) => {
  req.user.getProducts().then((prod) => {
    res.render("admin/products", {
      prods: prod,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

exports.postDeleteProduct = async (req, res, next) => {
  const prodId = req.body.id;
  await Product.destroy({
    where: {
      id: prodId,
    },
  });

  res.redirect("/admin/products");
};
