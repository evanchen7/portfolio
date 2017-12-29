import path from 'path';
import express from 'express';
// import router from './router';

const app = express();

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = express.static(path.join(__dirname, '../index.html'));

// Middleware
app.use(publicPath);

app.get('/', (req, res)=> {
  res.sendFile(indexPath);
});

export default app;
