var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main'); //one up in dir, controllers, then main
var ctrlActivity = require('../controllers/activityControl');

router.get('/', ctrlMain.layout);
router.get('/planner', ctrlMain.planner);
router.get('/activityResults/:name', ctrlActivity.find);
router.get('/findbyid/:activityId', ctrlActivity.findId);
router.get('/getAll', ctrlActivity.getAll);
router.get('/about', ctrlMain.about);
router.get('/contact', ctrlMain.contact);

module.exports = router;