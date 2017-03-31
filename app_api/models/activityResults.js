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

var activityResults2Schema = new mongoose.Schema({ 
   name: String,
   price: { 
      adults: Number, 
      children: Number, 
      students: Number, 
      seniors: Number 
   },
   distance: Number, 
   rating: Number,
   location: {
      building: String, 
      address: String, 
      city: String, 
      state: String, 
      country: String 
   },
   transportation: {
      walking: {
         estimateHour: Number, 
         estimateMinutes: Number
      }, 
      bus: {
         estimateHour: Number, 
         estimateMinutes: Number
      }, 
      car:{
         estimateHour: Number, 
         estimateMinutes: Number
      }, 
      hoverboard: {
         estimateHour: Number, 
         estimateMinutes: Number
      }, 
      jetplane:{
         estimateHour: Number, 
         estimateMinutes: Number
      }
      
   }, 
   genre: { 
      mainGenre: String, 
      secondaryGenre: String, 
      typeOfActivity:String, 
      kidFriendly:String, 
   },
  duration: Number,
   time: {
      begin:String, 
      end: String
   }
}); 

var userInputsSchema = new mongoose.Schema({ 
   emailAddress: String,
   userName:String,
   password: String,
   passwordReEntered: String
});

mongoose.model('activityResults', activityResultsSchema, 'activityResults');
mongoose.model('activityResults2', activityResults2Schema, 'activityResults2');
mongoose.model('userInputs', userInputsSchema, 'userInputs');