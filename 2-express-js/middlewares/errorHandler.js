function errorHandler(err, req, res, next) {
  if (err.name === "movie not found") {
    return res.status(404).json({ errorMessage: "movie not found" });
  } else if (err.name === "detail movie not found") {
    return res.status(404).json({ errorMessage: "detail movie not found" });
  } else if (err.name === "imdbID not found") {
    return res.status(400).json({ errorMessage: "imdbID not found" });
  }
}

module.exports = errorHandler;
