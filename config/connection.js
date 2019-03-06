var mysql = require("mysql");
var connection;
// connect to Heroku DB...
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({ // or, connect locally...
        host: "localhost",
        user: "root",
        password: "0911",
        database: "burgers_db"
    });
};
// connect function...
connection.connect(function (err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;