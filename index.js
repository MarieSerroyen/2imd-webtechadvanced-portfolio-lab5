const express = require('express');


const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'pug');


app.get('/api/v1/messages', (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log('Example app listening on port ${port}')
});
