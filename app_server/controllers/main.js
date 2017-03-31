/* GET home page */
var mongoose = require('mongoose');
module.exports.layout = function(req, res){
    //console.log(req.method, req.url);
    res.render('layout', { title: 'Day Planner' });
};
module.exports.planner = function(req, res){
    //console.log(req.method, req.url);
    res.render('planner', { title: 'Day Planner' });
};
module.exports.about = function(req, res){
    //console.log(req.method, req.url);
    res.render('about', { title: 'Day Planner' });
};
module.exports.contact = function(req, res){
    //console.log(req.method, req.url);
    res.render('contact', { title: 'Day Planner' });
};
module.exports.events = function(req, res){
    //console.log(req.method, req.url);
    res.render('events', { title: 'Day Planner' });
};

module.exports.login = function(req, res){
    //console.log(req.method, req.url);
    res.render('login', { title: 'Day Planner' });
};

module.exports.signup = function(req, res){
    //console.log(req.method, req.url);
    res.render('signup', { title: 'Day Planner' });
};
