var mongoose = require('mongoose');

// module.exports.planner = function(req, res){
//     //console.log(req.method, req.url);
//     res.render('act1', { title: 'act2' });
// };


var activityResults = mongoose.model('activityResults');
//var activityResults2 = mongoose.model('activityResults2');
var sendJSONresponse = function(res, status, content){
    res.status(status);
    res.json(content);
};


// module.exports.find2 = function(req, res){
//     activityResults2.findOne({name:req.params.name}).exec(function(err,data){
//         sendJSONresponse(res,200, data);
//     });
// };


module.exports.find = function(req, res){
    activityResults.findOne({name:req.params.name}).exec(function(err,data){
        sendJSONresponse(res,200, data);
    });
};

module.exports.findId = function(req, res){
      activityResults
    .findById(req.params.activityId)
    .exec(function(err, data) {
      sendJSONresponse(res, 200, data);
    });
};


module.exports.getAll = function(req, res) {

  activityResults
    .find()    //exec tells to execute query 
    .exec(function(err, data) {    //faculty is the return data
      //console.log("Found Faculty", faculty.length);
      //console.log(faculty);
sendJSONresponse(res, 200, data);
    });

};

//doesn't do anything
module.exports.getCollections = function(req, res){
    activityResults
        .getCollectionNames().exec(function(err, data){
            sendJSONresponse(res, 200, data);
        });
};

