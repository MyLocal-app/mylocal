// require the db models
var User = require('../db/user');
var Task = require('../db/task');
//var fs = require('fs')

// For authentication
const jwt = require('jwt-simple');
const secret = process.env.SECRET;
// helper function to encode the token given the user obj
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, secret);
}
// Returns a token, if it gets here then already authenticated by passport middleware
exports.signin = function(req, res) {
  console.log(req.user);
  res.send({
    token: tokenForUser(req.user),
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    address: req.user.address
  });
};

exports.signup = function(req, res) {
//   console.log(req.body.email, req.body.file)
//   fs.readFile(req.body.file, function (err, data) {
//     var newPath = __dirname + '/../../public/uploads';
//     fs.writeFile(newPath, data, function (err) {
//       if(err) console.log('error with file')
//   });
// });
  var email = req.body.email;
  var password = req.body.password;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var address = req.body.address;
  if (!email || !password) {
    return res.status(422).send({ error: 'You must submit email and password'});
  }
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) return next(err);
    if (existingUser) {
      return res.status(422).send({error: 'Email is in use'});
    }
    var user = new User({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      address: address
    });
    user.save(function(err) {
      if (err) return next(err);
      res.json({ token: tokenForUser(user)});
    });
  });
};

// For yelp search
var Yelp = require('yelp');
var yelp = new Yelp({
  consumer_key: '0KScCgu0-rfXYrnf7vW7Zw',
  consumer_secret: 'O3HV8Ip2lhrDJILG1iXWhZrl6qM',
  token: 'OilND9TNTxEQYt0Klpa8fvxwjyGr2yQ_',
  token_secret: 'TAq9HeKnc_RfL6b70OTNnekZRvE',
});
exports.searchYelp = function(req, res) {
  yelp.search({ term: req.query.term, location: req.query.location })
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      res.send(err);
    });
};

exports.fetchRestaurant = function(req, res) {
  yelp.business(req.params.id)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      res.send(err)
    });
};

exports.addTask = function(req, res) {
  console.log('IN THE SERVER', req.body, req.user);

  const taskObj = {
    owner: req.user.email,
    title: req.body.title,
    description: req.body.description,
    hours: req.body.hours,
    volunteer: req.body.volunteer,
    dollarValue: req.body.dollarValue,
    location: req.body.location,
    category: req.body.category,
    image: req.body.image,
    assignedTo: '',
    completed: false,
  };
  var task = new Task(taskObj);
  task.save(function(err, success) {
    if (err) console.log(err);
    res.setHeader('Content-Type', 'application/json');
    res.send({ task: success });
  });
};









