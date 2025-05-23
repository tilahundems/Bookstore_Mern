const Mongoose =  require('mongoose');

 const BookSchema =  new Mongoose.Schema(
    {
     title:{
            require:true,    
            type:String
           },
    author:{
            require:true,    
            type:String
           },
     publish_year:{
            require:true,    
            type:Number
           }

    },
    {
        timestamps:true
    }
);

const Books = Mongoose.model('Book',BookSchema);

module.exports = Books;