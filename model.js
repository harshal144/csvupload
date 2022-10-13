var mongoose = require('mongoose'); 
  
var UserModel = new mongoose.Schema({  
    Name:'string',
    Description:'string'
    
}); 
  
module.exports = new mongoose.model('UserModel', UserModel);
