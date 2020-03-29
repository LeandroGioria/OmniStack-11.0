import routes from './routes';
import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

app.use(cors(
    // {
    // origin: 'http://meuapp.com'
    // }
));
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
