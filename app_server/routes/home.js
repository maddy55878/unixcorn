var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main'); //one up in dir, controllers, then main
var ctrlActivity = require('../controllers/activityControl');

router.get('/', ctrlMain.layout);
router.get('/planner', ctrlMain.planner);
//router.get('/act2', ctrlActivity.layout);
//router.get('/activityResults', ctrlActivity.layout);
//router.get('/activityResults/:price', ctrlActivity.find);
//router.get('/activityResults/:price', ctrlActivity.find);
router.get('/activityResults/:name', ctrlActivity.find);
//router.get('/activityResults/:name2', ctrlActivity.find2);
router.get('/findbyid/:activityId', ctrlActivity.findId);
router.get('/getAll', ctrlActivity.getAll);
router.get('/getCollections', ctrlActivity.getCollections); 
router.get('/about', ctrlMain.about);
router.get('/contact', ctrlMain.contact);

//testing route 
//router.get('/testing', ctrlMain.testing);

module.exports = router;