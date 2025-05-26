 import React, { useEffect, useState } from 'react'
  import axios from 'axios'
  import Loading from '../Utilities/Loading.jsx';
import Table from 'react-bootstrap/Table';
 import {BsEyeFill,BsTrash,BsTrash2} from 'react-icons/bs'
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
 import {Link} from 'react-router-dom'

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
               <div className="container m-1  ">
              <div className="row">
                <div className="col-1"></div>
                
                <div className="col-sm-12 col-md-10 ">
             

              <Table responsive="sm" className='table  table-light   table-bordered  table-hover   '  >
          <thead className=''>  
          <tr className='table-dark'>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Book Published Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{books.map((book,i)=>(       
           <tr  key={i}>
            <td>{i+1}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.publish_year}</td>
            <td className='text-center'>  
               <Link  to={`/view/${book._id}`}> <span style={{color:'blue', fontSize:'15px'}}><FaRegEye  className='me-5' /></span> </Link> 
              <Link  to={`/update/${book._id}`}> <span style={{color:'black',fontSize:'15px' }}><CiEdit  className='me-5' /> </span>  </Link>
             <Link  to={`/delete/${book._id}`}>  <span style={{color:'red' ,fontSize:'15px'}}> <MdDeleteForever   className='me-5' /></span> </Link>
            </td>
          </tr>))  }
                 </tbody>
               </Table>
                </div>
                <div className="col-1"></div>
              </div>
            </div>


            }



   


</>
    
     )
}

export default Home