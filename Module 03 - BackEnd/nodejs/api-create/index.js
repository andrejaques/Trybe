const express = require('express');
const health = require('./controllers/health');
const productRouter = require('./controllers/product');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());
app.use(middlewares.logger);

app.get('/health', health);

app.use(
  '/product',
  middlewares.auth,
  productRouter
);

app.use(middlewares.tracker);
app.use(middlewares.error);

app.listen(3000, () => console.log('Running on port 3000'));