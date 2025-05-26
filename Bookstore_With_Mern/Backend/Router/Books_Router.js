const Express = require('express')
const Mongoose = require('mongoose');
const Books = require('../Models/Books_Models')
 
const Router= Express.Router();
//Creating Books
Router.post("/create", (req, res) => {
  const { title, author, publish_year} = req.body;
       
  Books.create({
    title: title,
    author: author,
    publish_year: publish_year
  })
    .then((result) => res.status(200).json( {message:"Book Created Succeeded"}))
    .catch((err) => console.log("Creating Book Error" + err));
});

// Fetching Book
 Router.get('/view/:id', async(req,res)=>{
   const {id} = req.params;
    await Books.findById(id).
   then((result)=>{
      res.json(result);
   }).
   catch(err => res.json("->" + err));
 });
//Updating A Book
Router.put('/update/:id' ,async (req,res)=>{
     const {id} = req.params;
        const { title, author, publish_year } = req.body;
   const data= await Books.findByIdAndUpdate(id,{ 
    title: title,
    author: author,
    publish_year: publish_year}).
   then((result)=>{
     if(result)
 return  res.status(200).json('Updated Successful');  
   }).
   catch(err => res.json("->" + err));  

})
//Deleting A Book 
Router.delete('/delete/:id' ,async (req,res)=>{
   const {id} = req.params;
   await Books.findByIdAndDelete(id).
     then((result)=>{
      res.status(200).json("Deleted Succeeded");
   }).
   catch(err => res.json("->" + err));
 });
  
// View All Books

Router.get("/", (req, res) => {

  Books.find({})
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log("" + err));
});

module.exports= Router;