const Express = require("express");
const Mongoose = require("mongoose");
const Books = require("./Models/Books_Models");
 const BooksRoute= require('./Router/Books_Router');
const cors = require('cors');

const app = Express();
const Port = process.env.por || 5000;
app.use(cors());
//const Mongoose_uri='mongodb+srv://tilahundems271:aVXMs1Dwi1krvYBI@tododb.txohyl5.mongodb.net/?retryWrites=true&w=majority&appName=todoDB'
const Mongoose_uri = "mongodb://localhost:27017/Bookstore";
app.use(Express.json());

Mongoose.connect(Mongoose_uri);
    // .then(() => console.log("Connection Succeeds"))
    // .catch((err) => console.log("there Is Error" + err));
 //Listing the Port
    app.listen(Port, () => {
  console.log(`Server Is Running on port ${Port}`);
});
 // All the Routers
app.use('/books',BooksRoute);
