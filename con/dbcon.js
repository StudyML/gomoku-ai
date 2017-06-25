module.exports = function() {
    var mysql = require('mysql');
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'chan1202',
        database: 'omok'
    });
    conn.connect();
    var sql = "";
    return conn;
}
