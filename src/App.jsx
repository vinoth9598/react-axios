import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Home from './Component/Home';
import Add from './Component/Add';
import Edit from './Component/Edit';
import './Component/style/home.css';


function App() {
    const [notes,setNotes]=useState([]);

    const fetchNotes=async ()=>{
        let response=await axios.get('http://localhost:3001/users')
        let data= await (response.data)
        setNotes(data);
    }

    useEffect(()=>{
        fetchNotes();
    },[])

  return (
    <Router>
        <Routes>
                <Route path='/' element={<Home notes={notes} fetchNotes={fetchNotes}/>} />
                <Route path='/create' element={<Add notes={notes} fetchNotes={fetchNotes}/>}/>
                <Route path='/update' element={<Edit notes={notes} fetchNotes={fetchNotes}/>}/>
        </Routes>
    </Router>
  )
}

export default App;
