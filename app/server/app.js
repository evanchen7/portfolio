'use strict';
import path from 'path';
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';

// import router from './router';

const app = express();
const indexPath = path.join(__dirname, './index.html');
const publicPath = express.static(path.join(__dirname, '../'));
const static1 = express.static('static');

// Middleware
app.use(helmet());
app.use(publicPath);
app.use(static1);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

app.get('/health-check', (req, res) => {
  res.sendStatus(200);
});

app.post('/test', (req, res) => {
  let x = parseInt(req.body.x), y = parseInt(req.body.y);
  if (isNaN(x) || isNaN(y)) res.send('Send a valid number for x or y value and try again');
  let sum = {
    "sum": x + y
  };
  res.send(sum);
});

export default app;
