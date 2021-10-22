const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const routes = require("./route");
const server = require("http").createServer(app);
const errorHandler = require("./middlewares/errorHandler");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.get("/", function (req, res) {
  res.send({ message: "Hello World" });
});
app.use(errorHandler);

let distDir = __dirname + "/dist/";
app.use(express.static(distDir));
if (app.get("env") !== "test") {
  app.listen(PORT, function () {
    console.log(`Now running on PORT ${PORT}`);
  });
}

module.exports = { app, server };
