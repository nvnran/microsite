const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to DB')
);

app.get('/', (req, res) => {
  res.send('Jpme');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running o port ${PORT}`));
