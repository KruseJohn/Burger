// The controller accepts input and converts it to commands for the model or view...

var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// route for index...
router.get("/", function (req, res) {
    res.redirect("/burgers");
});

// express callback response by calling burger.selectAll...
router.get("/burgers", function (req, res) {
    burger.selectAll(function (burgerData) {
        // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar...
        res.render("index", {
            burger_data: burgerData
        });
    });
});

// post (create) route...
router.post("/burgers/create", function (req, res) {
    // request object used as input for burger.insertOne...
    burger.insertOne(req.body.burger_name, function (result) {
        console.log(result);
        //  redirect back to index when done
        res.redirect("/");
    });
});

// put (update) route...
router.put("/burgers/:id", function (req, res) {
    burger.updateOne(req.params.id, function (result) {
        console.log(result);
        // send response function successful
        res.sendStatus(200);
    });
});

// delete route...
router.delete("/burgers/:id", function (req, res) {
    var condition = "id=" + req.params.id;

    burger.deleteOne(condition, function (result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;