const request = require("supertest");
const axios = require("axios");
const { app, server } = require("../app");
const http = require("http");
const listen = require("test-listen");

const { sequelize } = require("../models");
const { queryInterface } = sequelize;
describe("Movie Router", () => {
  beforeAll(async () => {
    const param = "Naruto";
    const response = await axios({
      method: "get",
      url: `http://www.omdbapi.com/?apikey=faf7e5bb&s=${param}`,
    });
    const dataMovies = response.data.Search;
    for (let i = 0; i < dataMovies.length; i++) {
      dataMovies[i].Keyword = param;
      dataMovies[i].createdAt = new Date();
      dataMovies[i].updatedAt = new Date();
    }
    await queryInterface.bulkInsert("Movies", dataMovies);
  });
  afterAll(async () => {
    await queryInterface.bulkDelete("Movies", {});
  });

  describe("GET /search", () => {
    test("200 get movies success - data omdb has been registered before, return json message", async () => {
      const response = await request(app)
        .get("/search")
        .send({ title: "Naruto" });
      const { body, status } = response;

      expect(status).toBe(200);
      expect(body).toHaveProperty("message", expect.any(Array));
    });
    test("200 get movies success - data omdb does not registered to DB, return json message", async () => {
      const response = await request(app)
        .get("/search")
        .send({ title: "Robin" });
      const { body, status } = response;

      expect(status).toBe(200);
      expect(body).toHaveProperty("message", expect.any(Array));
    });
    test("404 m ovies not found, return json message", async () => {
      const response = await request(app)
        .get("/search")
        .send({ title: "titlesdsd" });
      const { body, status } = response;
      expect(status).toBe(404);
      expect(body).toHaveProperty("errorMessage", "movie not found");
    }, 3000000);
  });

  describe("GET /detail", () => {
    test("200 success get detail movie - imdbID not found, return json message", async () => {
      const response = await request(app)
        .get("/detail")
        .send({ imdbID: "tt0988824" });
      const { body, status } = response;
      expect(status).toBe(200);
      expect(body).toHaveProperty("message", expect.any(Object));
    });
    test("400 failed detail movie - empty imdbID, return json message", async () => {
      const response = await request(app).get("/detail");
      const { body, status } = response;
      expect(status).toBe(400);
      expect(body).toHaveProperty("errorMessage", "imdbID not found");
    });
    test("404 failed detail movie - detail movie not found, return json message", async () => {
      const response = await request(app)
        .get("/detail")
        .send({ imdbID: "220988824" });
      const { body, status } = response;
      expect(status).toBe(404);
      expect(body).toHaveProperty("errorMessage", "detail movie not found");
    });
  });
});
