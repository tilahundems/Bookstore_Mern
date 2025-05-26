import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
 import {useSnackbar } from 'notistack'

function Create() {
    
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const navigator = useNavigate();  
   const [book,setBooks] = useState({
        title:'',
        author :'',
        publish_year: ''
        });


  const handleCreate =() => {

 axios.post('http://localhost:5000/books/create',book ,
              {
               headers: {'Content-Type': 'application/json' },
               
              }
          ).
          then(result=> result.data).
          then(data =>{
               enqueueSnackbar(data.message , {variant:'success'});
               setBooks({
                title:'', 
                author :'',
                publish_year: ''
         })
         navigator('/')
          }).
               
          catch (err => {console.log(err)
        enqueueSnackbar(`There is Error:${err}` ,{variant:'error'}) ;
        console.log(err)
             })

          

  }  
  return (
  
    
    <>
    
  <div className="container-fluid">
    <div className="row">
     

      <div className="col-sm-12 col-md-4 text-center mt-1 ">

      </div>
       <div className="col-sm-12 col-md-4 ">
        <div className="form-group  text-center mt-1">
        <input type="text" className='form-control m-1' value={book.title} placeholder='Title of Book' onChange={(e)=>{ setBooks({ ...book,title:e.target.value})} } />
        <input type="text" className='form-control m-1'  value={book.author}  placeholder='Author of Book'   onChange={(e)=>{ setBooks({...book,author:e.target.value})}} />  
        <input type="number" className='form-control m-1' value={book.publish_year}  placeholder='Published Year of Book'   onChange={(e)=>{   setBooks({...book,publish_year:e.target.value })}}/>
        <button className='  btn btn-primary m-1 form-control' onClick={handleCreate}> Create Book</button>
        </div>
      </div>  
      
      <div className="col-sm-12 col-md-4 text-center mt-5">

      </div>
    </div>

  </div>
    
    </>
  )
}

export default Create