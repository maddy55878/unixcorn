var mongoose = require('mongoose');

var activityResults = mongoose.model('activityResults');
var sendJSONresponse = function(res, status, content){
    res.status(status);
    res.json(content);
};



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
    .exec(function(err, data) { 
sendJSONresponse(res, 200, data);
    });

};
