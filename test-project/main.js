const express = require("express");
const bodyParser = require("body-parser");
const dataRout = require("./routes/sending-data");
const updateRout = require("./routes/updating-data");
const models = require("./util/db");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(dataRout);
app.use(updateRout);

models.sync().then(() => {
  app.listen(8000);
});
