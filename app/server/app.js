'use strict';
import path from 'path';
import express from 'express';
import helmet from 'helmet';
// import router from './router';

const app = express();

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = express.static(path.join(__dirname, '../index.html'));

// Middleware
app.use(publicPath);
app.use(helmet());

app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

app.get('/health-check', (req, res) => {
  res.sendStatus(200);
});

export default app;
