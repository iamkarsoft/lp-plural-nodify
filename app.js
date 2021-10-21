const express = require('express');

const app = express();

const port = process.env.PORT || 8976;

app.get('/', (req, res) => {
  res.send('Hello APi');
});

app.listen(port, () => {
  console.log(`running app on port ${port}`);
});