var mongoose = require('mongoose'); 
  
var UserModel = new mongoose.Schema({  
    Name:'string',
    Description:'string',
    salePrice:'string',
    regularPrice:'string',
    Categories:'string'
}); 
  
module.exports = new mongoose.model('UserModel', UserModel);