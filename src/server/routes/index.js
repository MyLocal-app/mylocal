//start the express router
var router = require('express').Router();

// start passport
var passport = require('passport');
var passportService = require('../passport');
  // setting passport middleware - used to secure any route
var requireAuth = passport.authenticate('jwt', { session: false });
  // setting passport middleware - used for signin
const requireSignin = passport.authenticate('local', { session: false });

// require the route handlers
var handler = require('../controllers');

// signup route with multer middleware
router.post('/signup', handler.signup);

// signin route
router.post('/signin', requireSignin, handler.signin);

// call from client for add task
router.post('/api/addTask', requireAuth, handler.addTask);

//call from client for add service
router.post('/api/addService', requireAuth, handler.addService);

// commit to taking on a task
router.post('/api/doTask', requireAuth, handler.doTask);

//call from client to fetch user
router.post('/api/fetchUser', handler.fetchUser);

//review task
router.post('/api/addReview', requireAuth, handler.addReview);

// call from client for yelp search
router.get('/api/search/restaurants', handler.searchYelp);

// example: protected route
router.get('/secured', requireAuth, function(req, res) {
  res.send({ success: true });
});

// get a single restaurant selected by user
router.get('/fetchRestaurant/:id', handler.fetchRestaurant);

//get tasks near user (there's a query string with longitude and latitude)
router.get('/api/getTasks', handler.getTask);

//get servives
router.get('/api/getServices', handler.getService);

router.get('/api/getVolunteers', handler.getVolunteer);

// save a favorite to favorites list
router.post('/api/saveFavorite', requireAuth, handler.saveFavorite);

// fetch the favorites list
router.get('/api/fetchFavorites', requireAuth, handler.fetchFavorites);

//catchall
router.get('/*', function (req, res) {
  res.sendFile('index.html', { root: __dirname + '/../../public/' });
});


module.exports = router;