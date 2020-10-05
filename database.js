"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
var pg_1 = require("pg");
var dbConfig = {
    user: 'postgres',
    password: '2244',
    database: 'postgres',
    host: 'localhost',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000
};
var pool = new pg_1.Pool(dbConfig);
pool.on('error', function (err) {
    console.log("We have an error!: " + err.message + " - " + err.stack);
});
function query(text, params, callback) {
    return pool.query(text, params, callback);
}
exports.query = query;
