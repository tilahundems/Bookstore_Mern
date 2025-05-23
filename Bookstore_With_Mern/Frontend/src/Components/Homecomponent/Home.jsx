import React, { useEffect, useState } from 'react'
 import axios from 'axios'
import Loading from '../Utiles/Loading';


function Home() {

 const [ loading ,setLoading]=useState(true)
 const [books ,setBooks]=useState( []);

// useEffect(() => {
//     axios.get('http://localhost:5000/books')
//       .then(response => {
//         setBooks(response);  // use response.data to access the actual array
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("Error fetching books:", error);
//         setLoading(false);
//         console.log(books)

//       });
//   }, []);

useEffect( ()=>{
  const data =   axios.get('http://localhost:5000/books').
then(result=>{

    setBooks(result.data);
        
        setLoading(false);


})
  
},[])

  return (

    


  <div className="container">
    <div className="row">
        <div className="col-6">
          {

            books.map((res ,i)=>(

              <h1 key={i}> {res.publish_year}   </h1> 
            ))
          }
        </div>
       
    </div>
  </div>

      

          
     )
}

export default Home