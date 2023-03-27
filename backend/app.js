const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require("./routes/posts");

const app = express();

const options = {
  serverSelectionTimeoutMS: 300000, // set the server selection timeout to 30 seconds
  socketTimeoutMS: 450000 // set the socket timeout to 45 seconds
};

mongoose.connect("mongodb+srv://audrey:KTQ47eW2p88Cjqf@cluster0.u4kkidg.mongodb.net/?retryWrites=true&w=majority", options)
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed');
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
})

app.use('/api/posts', postsRoutes);


module.exports = app;

