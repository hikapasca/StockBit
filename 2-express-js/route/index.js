const routes = require("express").Router();
const MovieController = require("../controller/MoviesController");

routes.get("/search", MovieController.getMovies);
routes.get("/detail", MovieController.getDetailMovie);

module.exports = routes;
