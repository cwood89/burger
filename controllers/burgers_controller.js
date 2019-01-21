var express = require("express")
var router = express.Router();
var db = require("../models");




router.get("/", function (req, res) {
  db.Burger.findAll({}).then(function (data) {
    res.render("index", { data });
  });
});

module.exports = router;
  // app.get("/api/authors/:id", function (req, res) {
  //   // 2; Add a join to include all of the Author's Posts here
  //   db.Author.findOne({
  //     include: [db.Post],
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });

  // app.post("/api/authors", function (req, res) {
  //   db.Author.create(req.body).then(function (dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });

  // app.delete("/api/authors/:id", function (req, res) {
  //   db.Author.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });

// Inside the `burgers_controller.js` file, import the following:

// Express
// `burger.js`

// Create the `router` for the app, and export the `router` at the end of your file.