import app from './app';
const PORT = process.env.port || 8080;
const HOST = 'http://localhost';

app.listen(PORT, ()=> {
  console.log(`Listening at ${HOST}:${PORT}`);
});
