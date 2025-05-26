import axios from 'axios'
import { Alert, Button, Modal } from 'bootstrap/dist/js/bootstrap.bundle.min'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import {useSnackbar } from 'notistack'

function Delete() {
    const [book,setbook]= useState([]); 
      const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const {id}= useParams();
   const navigator = useNavigate();
useEffect( ()=>{
     
axios.get(`http://localhost:5000/books/view/${id}`).
 then(  
  (result) => result.data).
 then(data=>{
      setbook(data)
    console.log(data)

 }
 ).
 catch(err =>(alert(err)))

  },[])
   const handleDelte = () =>{

     axios.delete(`http://localhost:5000/books/delete/${id}`).
 then(  
  (result) => result.data).
 then(data=>{
          
     
      enqueueSnackbar(data,{variant:'success'})
      navigator('/'); 
        

 }
 ).
 catch(err => {
  console.log(err)
   enqueueSnackbar(err,{variant:'error'})
  
  })
   }


  return (
  <>
  
      <div className="container-fluid">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-5"> <Card border="warning"
              bg='info'
             text='dark  '
          style={{ width: '50rem' }}
          className="  m-1 text-center "
        >
          <Card.Header>  {book.title}  </Card.Header>
          <Card.Body>
            <Card.Title> {book.author} </Card.Title>
            <Card.Text>
            {book.publish_year}
            </Card.Text>
              <button className='form-control outline-danger btn btn-danger '  onClick={handleDelte}> Delete Record</button>

          </Card.Body>
        </Card></div>
       
        </div>
      </div>
         
    
  
  </>
  )
}

export default Delete