// require the db models
var User = require('../db/user');
var Task = require('../db/task');
var Service = require('../db/service');
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
  res.send({
    token: tokenForUser(req.user),
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    address: req.user.address,
    location: req.user.location
  });
};

exports.signup = function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var address = req.body.address;
  var locObj = req.body.locObj;
  var image = req.body.file;
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
      address: address,
      location: locObj,
      image: image
    });
    user.save(function(err) {
      if (err) return next(err);
      res.json({ token: tokenForUser(user)});
    });
  });
};

exports.fetchUser = function(req, res) {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err) res.send(err);
    if (user) {
      res.send(user);
    }
  });
}

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

exports.getTask = function(req, res) {
  console.log()
  Task.find({}, function(err, tasks){
    if(err){
      console.error(err);
    }
    res.json(tasks);
  })
}

exports.addService = function(req, res) {

  const fullName = req.user.firstName + ' ' + req.user.lastName;

  const serviceObj = {
    ownerName: fullName,
    ownerEmail: req.user.email,
    volunteer: req.body.volunteer,
    category: req.body.category,
    description: req.body.description,
    rate: req.body.rate,
    title: req.body.title,
    location: req.body.location
  };

  var service = new Service(serviceObj);
  service.save(function(err, success) {
    if (err) console.log(err);
    res.setHeader('Content-Type', 'application/json');
    res.send({ service: success });
  });
};

exports.getService = function(req, res) {

  Service.find({}, function(err, services){
    if(err) {
      console.error(err);
    }
    res.json(services);
  });
};









