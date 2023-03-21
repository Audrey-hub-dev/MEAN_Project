const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

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

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS");
  next();
})

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message: 'Post added successfully'
  });
});


app.get('/api/posts',(req, res, next) => {
  Post.find().then(documents => {
      res.status(200).json({
        message: 'Posts fetched succesfully!',
        posts: documents
      });
  });
});

module.exports = app;

