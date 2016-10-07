//start the express router
var router = require('express').Router();

// start passport
var passport = require('passport');
var passportService = require('../passport');
  // setting passport middleware - used to secure any route
var requireAuth = passport.authenticate('jwt', { session: false });
  // setting passport middleware - used for signin
const requireSignin = passport.authenticate('local', { session: false });

//start multer for file uploads
var multer = require('multer');
// // var storage = multer.diskStorage({
// //   destination: function(req, file, cb) {
// //     //cb provides a placeholder for dest directory of files
// //     cb(null, __dirname + '/../../public/uploads');
// //   },
// //   filename: function(req, file, cb) {
// //     //cb provides placeholder for dest.filename
// //     cb(null, Date.now() + '-' + file.originalname)
// //   }
// // });
var upload = multer({ dest: __dirname + '/../../public/uploads' });

// require the route handlers
var handler = require('../controllers');

// signup route with multer middleware
router.post('/signup', upload.any(), handler.signup);

// signin route
router.post('/signin', requireSignin, handler.signin);

// call from client for add task
router.post('/api/addTask', requireAuth, handler.addTask);

//call from client for add service
router.post('/api/addService', requireAuth, handler.addService);

// call from client for yelp search
router.get('/api/search/restaurants', handler.searchYelp);

// example: protected route
router.get('/secured', requireAuth, function(req, res) {
  res.send({ success: true });
});

// get a single restaurant selected by user
router.get('/fetchRestaurant/:id', handler.fetchRestaurant);

router.get('/api/getTasks', handler.getTask);

router.get('/api/getServices', handler.getService);

//catchall
router.get('/*', function (req, res) {
  res.sendFile('index.html', { root: __dirname + '/../../public/' });
});


module.exports = router;