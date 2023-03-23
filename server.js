const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/my-database', { useNewUrlParser: true });

const Item = mongoose.model('Item', {
  name: String,
  description: String,
});

app.use(bodyParser.json());

app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
