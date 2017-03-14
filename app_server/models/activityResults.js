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

mongoose.model('activityResults', activityResultsSchema, 'activityResults');
