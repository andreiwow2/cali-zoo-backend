"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dotenv = require("dotenv");
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var session = require("express-session");
var passport_1 = __importDefault(require("passport"));
var connect_pg_simple_1 = __importDefault(require("connect-pg-simple"));
var postgresSqlStore = connect_pg_simple_1.default(session);
dotenv.config();
var secret_key = process.env.SECRET_KEY;
var app = express();
// Add headers
var options = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: 'http://localhost:4200',
    preflightContinue: false,
};
app.use(cors_1.default(options));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_parser_1.default('test-secret'));
app.use(express.static(__dirname + 'public'));
app.options('*', cors_1.default(options));
app.use(session({
    secret: 'test-secret',
    name: 'sid',
    store: new postgresSqlStore({
        conString: "postgres://postgres:2244@localhost:5432/postgres"
    }),
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 2 * 60 * 60 * 1000 /* 2 hours */, secure: false }
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(routes_1.default, passport_1.default.initialize());
app.listen(process.env.PORT, function () { return console.log("Hello world app listening on port " + process.env.PORT + "!"); });
