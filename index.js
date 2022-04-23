const express = require('express');
const logger = require('./middleware/logger');

const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'pug');


app.get('/api/v1/messages', logger, (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
