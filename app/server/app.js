'use strict';
import path from 'path';
import express from 'express';
import helmet from 'helmet';
// import router from './router';

const app = express();
const indexPath = express.static(path.join(__dirname, '../../static/index.html'));

// Middleware
app.use(express.static('static'));
app.use(helmet());

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/health-check', (req, res) => {
  res.sendStatus(200);
});

export default app;
