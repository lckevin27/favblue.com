var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var passport = require('passport');
var Account = require('../models/account');
var jwt = require('jsonwebtoken');

async function loadDataCollection() {
  const client = await mongodb.MongoClient.connect('YOUR_DB_URL', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  return client.db('Cluster0').collection('posts');
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Please visit favblue.com for more information.');
});

/* IFE APIs */
router.get('/IFE', async function(req, res, next) {
  const posts = await loadDataCollection();
  const combArr = [];
  combArr.push(await posts.find({ 'cate': 'intro' }).toArray());
  combArr.push(await posts.find({ 'cate': 'html' }).toArray());
  combArr.push(await posts.find({ 'cate': 'css' }).toArray());
  combArr.push(await posts.find({ 'cate': 'js' }).toArray());
  combArr.push(await posts.find({ 'cate': 'vue' }).toArray());
  res.send(combArr);
});

router.post('/IFE', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'secretkey', async (err, authData) => {
    if(err) {
      res.send(err);
    } else {
      const posts = await loadDataCollection();
      await posts.insertOne({
        title: req.body.title, // this field is unique
        url: req.body.url, // this field is unique
        cate: req.body.cate,
        text: req.body.text,
        num: req.body.num,
        createdAt: new Date()
      });
    
      res.status(201).send();
    }
  });
});

router.get('/IFE/:url', async function(req, res, next) {
  const posts = await loadDataCollection();
  res.send(await posts.find({ 'url': req.params.url }).toArray());
});

router.delete('/IFE/:id', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'secretkey', async (err, authData) => {
    if(err) {
      res.send(err);
    } else {
      const posts = await loadDataCollection();
      //await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
      res.status(200);
    }
  });
});

router.post('/IFE/edit/:id', verifyToken, async function(req, res, next) {
  jwt.verify(req.token, 'secretkey', async (err, authData) => {
    if(err) {
      res.send(err);
    } else {
      const posts = await loadDataCollection();
      var newvalues = {$set: {
        title: req.body.title, // this field is unique
        url: req.body.url, // this field is unique
        cate: req.body.cate,
        text: req.body.text,
        num: req.body.num,
        createdAt: new Date()
      }};
      posts.updateOne({_id: new mongodb.ObjectID(req.params.id)}, newvalues, function(err, res) {
        if (err) {
          console.log(err);
          res.send(err);
        };
      });
    }
  });
});


// Authentication
router.post('/login', passport.authenticate('local'), function(req, res, next) {
  Account.findOne({ 'username': req.body.username }, (err, user) => {
    if(err) {
      res.send(err);
    } else {
      jwt.sign({user}, 'secretkey', /*{ expiresIn: '30s' }, */(err, token) => {
        if(err) {
          res.send(err);
        } else {
          res.json({
            token
          });
        }
      });
    }
  });
});

router.get('/validateToken', verifyToken, function(req, res, next) {
  jwt.verify(req.token, 'secretkey', async (err, authData) => {
    if(err) {
      res.send(err);
    } else {
      res.send({
        name: 'valid'
      });
    }
  });
});

/* Registration not allowed
router.post('/register', function(req, res, next) {
  Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
    if (err) {
      res.send('Registration failed.');
    }
      res.send('Registration successful.');   
  });
});
*/

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

module.exports = router;
