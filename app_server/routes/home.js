var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main'); //one up in dir, controllers, then main

/* GET home page. */
// get request with URL / 
//router
//    .route('/')
//    .get(ctrlMain.index);

// or     
router.get('/', ctrlMain.layout);

router.get('/planner', ctrlMain.planner);
router.get('/about', ctrlMain.about);
router.get('/contact', ctrlMain.contact);

//testing route 
//router.get('/testing', ctrlMain.testing);

module.exports = router;
