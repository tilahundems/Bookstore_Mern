import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../Utilities/Loading.jsx';
import Table from 'react-bootstrap/Table';
import {BsEyeFill,BsTrash,BsTrash2} from 'react-icons/bs'
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import {Link} from 'react-router-dom'
 import bookstorepic  from '../../../public/Images/bookstorepic.jpg'
 import b2  from '../../../public/Images/b2.jpg'
 import b3  from '../../../public/Images/b3.jpg'
 import b4  from '../../../public/Images/b4.jpg'
import Carousel from 'react-bootstrap/Carousel';
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
           <div className="container text-center text-light justify-content-center ">
            <div className="row">
              <div className="col-sm-12 col-md-6 ">
                  <p>
                 Welcome To Bookstore Page
                   </p>

    

              </div> 
              <div className="col-sm-12 col-md-6 ">
                 <Carousel data-bs-theme="dark" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b3}
          alt="First slide"
        />
        <Carousel.Caption  className='text-info'>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b4}
          alt="First slide"
        />
        <Carousel.Caption  className='text-info'>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item>
        <img  
          className="d-block w-100"
          src={bookstorepic}
          alt="Second slide"
        />
        <Carousel.Caption  className='text-info' >
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b2}
          alt="Third slide"
        />
        <Carousel.Caption  className='text-info'>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption >
      </Carousel.Item>
                </Carousel> 
              </div>
            
            </div>
           </div>






     {
   
             loading ?    <Loading />   : 
               <div className="container-fluid m-1  ">
              <div className="row">
                <div className="col-1"></div>
                
                <div className="col-sm-12 col-md-10 col-12  ">
             

              <Table responsive="sm" className='table  ms-auto  table-hover  table-light   '  >
          <thead className='table-primary'>  
          <tr className=''>
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