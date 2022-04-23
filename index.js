const express = require('express');
const logger = require('./middleware/logger');
const messagesRouter = require("./routers/messages");

const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'pug');

app.use(express.json());
app.use("/api/v1/messages", messagesRouter);


app.get('/', (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
