var express = require('express');
var router = express.Router();
var ctrlMain = require('../app_server/controllers/main'); //one up in dir, controllers, then main
var ctrlActivity = require('../../controllers/activityControl');
//var serverHome = require('/app_server/routes/home'); 

// router.get('/', ctrlMain.layout);
// router.get('/planner', ctrlMain.planner);
// router.get('/about', ctrlMain.about);
// router.get('/contact', ctrlMain.contact);
// router.get('/events', ctrlMain.events);
// router.get('/events/login',  ctrlMain.login);
// router.get('/events/signup', ctrlMain.signup);

//Schemas
router.get('/activityResults/:name', ctrlActivity.findResults);
router.get('/findbyidResults/:activityId', ctrlActivity.findIdResults);
router.get('/getAllResults', ctrlActivity.getAllResults);
router.get('/activityResults2/:name', ctrlActivity.findResults2);
router.get('/findbyidResults2/:activityId2', ctrlActivity.findIdResults2);
router.get('/getAllResults2', ctrlActivity.getAllResults2);
router.get('/userInputs/:username', ctrlActivity.findUserInputs);
router.get('/findbyid/:userInputsId', ctrlActivity.findIdUserInputs);
router.get('/getAllUserInputs2', ctrlActivity.getAllUserInputs);

module.exports = router;