/* GET home page */

// create controller export
// reads req, returns res 
// res.render takes as arguments the view template (no extension needed) 
//and JS data obj

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
