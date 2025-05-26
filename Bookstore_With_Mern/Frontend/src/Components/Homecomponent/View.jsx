import React, { useEffect, useState } from 'react'
  import axios from 'axios'
import { useParams } from 'react-router-dom';
 import {Card} from 'react-bootstrap'
function View() {
  const [book,setbook]= useState([]); 
   
const {id}= useParams();
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

  },[]);




  return (
    <>

       





    <Card border="warning"
              bg='info'
             text='dark  '
          style={{ width: '100rem' }}
          className="  m-5 mt-1 text-center "
        >
          <Card.Header>   {book.author} </Card.Header>
          <Card.Body>
            <Card.Title> {book.title}</Card.Title>
            <Card.Text>
            {book.publish_year}
            </Card.Text>
          </Card.Body>
        </Card>








  
    </>
  )
}

export default View