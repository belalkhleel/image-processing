import express from 'express';
import routes from './routes';

const app = express();

app.use('/api', routes);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default app;
