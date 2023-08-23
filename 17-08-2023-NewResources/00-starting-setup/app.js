const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const sequelize = require("./util/db");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const Products = require("./models/product");
const Users = require("./models/user");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  Users.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log("there is some error"));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Users.hasMany(Products);

sequelize
  .sync()
  .then((res) => {
    return Users.findByPk(1);
  })
  .then((res) => {
    if (!res) {
      return Users.create({
        name: "Abhay",
        email: "abhay@gmail.com",
      });
    }
    return res;
  })
  .then((res) => {
    console.log(res);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
