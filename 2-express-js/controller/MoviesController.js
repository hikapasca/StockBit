const axios = require("axios");
const { Movie } = require("../models");
class MoviesController {
  static async getMovies(req, res, next) {
    try {
      const param = req.body.title ? req.body.title : "Batman";

      const checkData = await Movie.findOne({ where: { Keyword: param } });
      if (checkData === null) {
        const resultAxios = await axios({
          method: "get",
          url: `http://www.omdbapi.com/?apikey=faf7e5bb&s=${param}`,
        });
        if (resultAxios.data.Error) {
          throw { name: "movie not found" };
        } else {
          const dataFromOMDB = resultAxios.data.Search;
          for (let i = 0; i < dataFromOMDB.length; i++) {
            dataFromOMDB[i].Keyword = param;
          }
          await Movie.bulkCreate(dataFromOMDB);
          return res.status(200).json({ message: dataFromOMDB });
        }
      } else {
        const dataMovies = await Movie.findAll({ where: { Keyword: param } });
        return res.status(200).json({ message: dataMovies });
      }
    } catch (err) {
      next(err);
    }
  }

  static async getDetailMovie(req, res, next) {
    try {
      const { imdbID } = req.body;
      if (!imdbID) {
        throw { name: "imdbID not found" };
      } else {
        const data = await Movie.findOne({ where: { imdbID } });
        if (!data) {
          throw { name: "detail movie not found" };
        } else {
          return res.status(200).json({ message: data });
        }
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MoviesController;
