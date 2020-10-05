"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var passport_local_1 = require("passport-local");
var init = require("../passport");
var knex_1 = require("../knex/knex");
var bcrypt = __importStar(require("bcrypt"));
var options = {
    usernameField: 'email',
    passwordField: 'password'
};
init.default();
exports.default = passport_1.default.use(new passport_local_1.Strategy(options, function (username, password, done) {
    knex_1.knex('accounts').where({ userEmail: username }).first()
        .then(function (user) {
        if (!user)
            return done(null, false);
        if (!bcrypt.compareSync(password, user.userPassword)) {
            return done(null, false);
        }
        else {
            return done(null, user);
        }
    })
        .catch(function (err) { return done(err); });
}));
