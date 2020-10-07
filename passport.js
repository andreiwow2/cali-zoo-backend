"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var knex_1 = require("./knex/knex");
exports.default = (function () {
    passport_1.default.serializeUser(function (user, done) {
        console.log('inside ser');
        done(null, user.userId);
    });
    passport_1.default.deserializeUser(function (userId, done) {
        knex_1.knex('accounts').where({ userId: userId }).first()
            .then(function (user) { done(null, user); })
            .catch(function (err) { done(err, null); console.log("deserialoize Error " + err); });
    });
});
