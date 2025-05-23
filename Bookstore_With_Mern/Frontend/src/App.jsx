import { useState } from 'react'
import Home from './Components/Homecomponent/Home'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
 import {Route,Routes} from 'react-router-dom'
import Create from './Components/Homecomponent/Create';
import Update from './Components/Homecomponent/Update';
import Delete from './Components/Homecomponent/Delete';
import View from './Components/Homecomponent/View';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Routes>
      <Route path='/'  element={<Home />}   />
      <Route path='/create'  element={<Create />}   />
      <Route path='/update/:id'  element={<Update />}   />
      <Route path='/delete/:id'  element={<Delete />}   />
      <Route path='/view:id'  element={<View />}   />
    </Routes>





    </>
  )
}

export default App
