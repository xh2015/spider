import express, { Response, Request, NextFunction } from 'express';
import bodyParser from 'body-parser';
import router from './router';
import { next } from 'cheerio/lib/api/traversing';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use((req: Request, res: Response, next: NextFunction) => {
    req.teacherName = 'dell';
    next();
});
app.use(router);

app.listen(7001, () => {
    console.log('server is running');
});