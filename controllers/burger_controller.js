var express = require("express");

// Import the model (burger.js) to use its database functions.
var db = require("../models");

var router = express.Router();

router.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (dbBurger) {

        var burgersObject = {
            burgers: dbBurger
        };
        res.render("index", burgersObject);
    });
});


router.post("/api/burgers", function (req, res) {
    db.Burger.create({
        burger_name: req.body.name,
        // CustomerID: customer.id
    }).then(function (dbBurger) {
        res.json(dbBurger);
    });

});

router.put("/api/burgers/:id", function (req, res) {
    console.log(req.body.devouredValue)
    db.Burger.update(
        { devoured: req.body.devouredValue },
        { where: { id: req.params.id } }).then(function (dbBurger) {
            res.json(dbBurger);
        })
});

router.delete("/api/burgers/:id", function (req, res) {
    db.Burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbBurger) {
        res.json(dbBurger);
    });

});



router.post("/api/customers", function (req, res) {
    db.Customer.create({
        name: req.body.customerName,
    }).then(function (dbCustomer) {
        res.json(dbCustomer);
    });

});

// Export routes
module.exports = router;