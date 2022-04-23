const express = require('express');
const logger = require('./middleware/logger');
const messagesRouter = require("./routers/messages");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'pug');

app.use(express.json());
app.use(cors());
app.use("/api/v1/messages", messagesRouter);


app.get('/', (req, res) => {
  res.render("index", {title: "Hello", message: "person"});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
