import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import {useSnackbar } from 'notistack'

function Update() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const {id}= useParams();
   const navigator = useNavigate();
  const [book,setbook] = useState({
         title:'',
        author :'' ,
        publish_year: ''
});
 
useEffect( ()=>{
     
axios.get(`http://localhost:5000/books/view/${id}`).
 then(  
  (result) => result.data).
 then(data=>{
      setbook(data)
 

 }
 ).
 catch(err => {
  //  enqueueSnackbar(`There is Error ${err}`) ;
      console.log(err) 
 } )
  },[])
   


   const handleUpdate =()=>{ 

axios.put(`http://localhost:5000/books/update/${id}`,book,{
               headers: {'Content-Type': 'application/json' },
               
              }).
  then(response => response.data).
   then(data =>{
   
      enqueueSnackbar(data , {variant:'success'});
      navigator('/'); 
   }).catch(err=> {
       enqueueSnackbar(`There is Error ${err}` , {variant:'error'}) ;

      console.log(err) })
      
   }

   






  return ( 
 <>
 
  <div className="container-fluid">
    <div className="row">
     

      <div className="col-sm-12 col-md-4 text-center mt-1 ">

      </div>
       <div className="col-sm-12 col-md-4 ">
        <div className="form-group  text-center mt-1">
        <input type="text" className='form-control m-1' value= {book.title} placeholder='Title of Book' onChange={(e)=>{ setbook({ ...book,title:e.target.value})} } />
        <input type="text" className='form-control m-1'  value={book.author}  placeholder='Author of Book'   onChange={(e)=>{ setbook({...book,author:e.target.value})}} />  
        <input type="number" className='form-control m-1' value={book.publish_year}  placeholder='Published Year of Book'   onChange={(e)=>{   setbook({...book,publish_year:e.target.value })}}/>
        <button className='  btn btn-primary m-1 form-control' onClick={handleUpdate}> Update Book</button>
        </div>
      </div>  
       
      <div className="col-sm-12 col-md-4 text-center mt-5">

      </div>
    </div>

  </div>


 </>
     

  )
}

export default Update