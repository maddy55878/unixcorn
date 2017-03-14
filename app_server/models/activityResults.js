var mongoose = require('mongoose');

var activityResultsSchema = new mongoose.Schema({ 
   name: String,
   price: Number,
   distance: Number,
   rate: Number,
   location: String,
   transportation: String,
   genre: String,
   duration: Number,
   time: String
}); 

// var activityResults2Schema = new mongoose.Schema({ 
//    name: String
// }); 


// mongoose.model('activityResults2', activityResults2Schema);

mongoose.model('activityResults', activityResultsSchema, 'activityResults');
