// Import the ORM to create functions that will interact with the database...
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) { // cb = callback...
        orm.selectAll("burgers", function (result) {
            cb(result);
        });
    },

    insertOne: function (name, cb) {
        orm.insertOne("burgers", ["burger_name", "devoured"],
            [name, false], cb);
    },

    updateOne: function (id, cb) {
        var condition = "id=" + id;
        orm.updateOne("burgers", {
            devoured: true
        }, condition, cb);
    },

    deleteOne: function (condition, cb) {
        orm.deleteOne("burgers", condition, function (result) {
            cb(result);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;