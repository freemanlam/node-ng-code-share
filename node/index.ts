const express = require('express');
const http = require('http');
import { add, subtract } from '../shared/calculator';

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.json({
    'add(1, 1)' : add(1, 1),
    'subtract(10, 5)': subtract(10, 5)
  })
});

server.listen(8080, () => {
  console.log('server start');
});
