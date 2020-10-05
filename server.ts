import express = require('express');
import dotenv = require('dotenv');
import router from './routes';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session = require('express-session');
import passport from 'passport';
import pSqS from 'connect-pg-simple';
const postgresSqlStore = pSqS(session);

dotenv.config();

const secret_key: string = (process.env.SECRET_KEY as string);

const app: express.Application = express();


// Add headers
const options: cors.CorsOptions = {
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
app.use(cors(options));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('test-secret'));
app.use(express.static(__dirname + 'public'));

app.options('*', cors(options));


app.use(session({
    secret: 'test-secret',
    name: 'sid',
    store: new postgresSqlStore({
        conString: "postgres://postgres:2244@localhost:5432/postgres"
    }),
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 2 * 60 * 60 * 1000/* 2 hours */, secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(router, passport.initialize());

app.listen(process.env.PORT, () => console.log(`Hello world app listening on port ${process.env.PORT}!`));