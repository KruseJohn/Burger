var mysql = require("mysql");
var connection;

if (process.env._URL) {
    connection = mysql.createConnection(process.env._URL);
} else {
    connection = mysql.createConnection({
        port: 3000,
        host: "localhost",
        user: "root",
        password: "0911",
        database: "burgers_db"
    });
};

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;