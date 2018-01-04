'use strict';
import path from 'path';
import express from 'express';
import helmet from 'helmet';
// import router from './router';

const app = express();
const indexPath = path.join(__dirname, './index.html');
const publicPath = express.static(path.join(__dirname, '../'));
const static1 = express.static('static');

// Middleware
app.use(helmet());
app.use(publicPath);
app.use(static1);

app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

app.get('/health-check', (req, res) => {
  res.sendStatus(200);
});

export default app;
