import express, { Response, Request, NextFunction } from 'express';
import bodyParser from 'body-parser';
import router from './router';
import cookieSession from 'cookie-session';
import { next } from 'cheerio/lib/api/traversing';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({
    name: 'session',
    keys: ['teacher dell'],
    maxAge: 24 * 60 * 60 * 1000
}))
app.use(router);

app.listen(7001, () => {
    console.log('server is running');
});