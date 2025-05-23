 import React, { useEffect, useState } from 'react'
  import axios from 'axios'
  import Loading from '../Utilities/Loading.jsx';
import Table from 'react-bootstrap/Table';
 import {BsEyeFill,BsTrash,BsTrash2} from 'react-icons/bs'
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";

function Home() {
     const [books,setBooks] = useState([]);
     const [loading,setLoading] = useState(true);
     
useEffect (()=>{
           
    axios.get('http://localhost:5000/books').

    then(  response =>  response.data). 
    then( datajson=>
      {
      console.log(datajson) 
      setBooks(datajson) 
      setLoading (false);
      } 
    ).
    catch(err =>alert(err) );



},[])


  return (

<>  

 
              
   {
             loading ?    <Loading />   : 
               <div className="container mt-5">
              <div className="row">
                <div className="col-sm-12 col-md-12">
             

              <Table responsive="sm" className='table table-striped table-light  table table-bordered'>
          <thead className=''>
          <tr className='table-dark'>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Book Published Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody> {
                books.map((book,i)=>(   
           <tr  key={i}>
            <td>{i+1}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.publish_year}</td>
            <td className='text-center'>  
              <span style={{color:'blue', fontSize:'20px'}}><FaRegEye  className='me-5' />  </span>
              <span style={{color:'black',fontSize:'20px' }}> <CiEdit className='me-5' /> </span>
              <span style={{color:'red' ,fontSize:'20px'}}> <MdDeleteForever  className='me-5' /></span>
            </td>
          </tr>))  }
                 </tbody>
               </Table>
                </div>
              </div>
            </div>


            }


        
         
   


</>
    
     )
}

export default Home