
// modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//suppr via gitignore
require('dotenv').config();

//init express
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

// options
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true
  });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('passerelle mongoose établie');
});

// routes
const usersRouter = require('./routes/users');

// middlewares
app.use("/user", usersRouter);

// end emitter
app.listen(port, () => {
  console.log(`serveur lançée sur le port ${port}`);
});
