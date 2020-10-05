"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knex = void 0;
var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile')[environment];
var kn = require("knex");
exports.knex = kn(config);
