const express = require('express');

const app = express();

const port = process.env.PORT || 8976;

const bookRouter = express.Router();


//routes

bookRouter.route('/books')
  .get((req, res)=>{
    const response = { hello: 'This is my API' };

    res.json(response);
  });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Hello APi');
});

app.listen(port, () => {
  console.log(`running app on port ${port}`);
});