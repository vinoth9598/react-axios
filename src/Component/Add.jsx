import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style/Add.css';

function Add({notes,fetchNotes}) {

  const [inputData,setInputData]=useState({id:`${notes.length + 1}` , name:'',email:'',
  phone:'',website:'',city:''
})
  const navigate=useNavigate();

  const handlesubmit=(event)=>{
    event.preventDefault();

    axios.post('http://localhost:3001/users',inputData)
    .then((res)=>{
        alert('Add data successfully..,');
        fetchNotes();

        navigate('/');

    })
   

  }

  return (
    <div className='addcontent'>
        <div className='item'>
        <h2>Add to new Note</h2>
          <form onSubmit={handlesubmit} className='form'>
              <label>
                NAME:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type='text'
                    required
                    className='input'
                    onChange={e=>setInputData({...inputData, name:e.target.value})}

                  />
              </label>
              <br></br>
              <label>
                EMAIL:&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type='email'
                    required
                    className='input'
                    onChange={e=>setInputData({...inputData, email:e.target.value})}

                  />
              </label>
              <br></br>
              <label>
                PHONE:&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type='tel'
                    maxLength='10'
                    required
                    className='input'
                    onChange={e=>setInputData({...inputData, phone:e.target.value})}

                  />
              </label>
              <br></br>
              <label>
                WEBSITE:&nbsp;
                  <input
                    type='text'
                    required
                    className='input'
                    onChange={e=>setInputData({...inputData, website:e.target.value})}

                  />
              </label>
              <br></br>
              <label>
                CITY:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type='text'
                    required
                    className='input'
                    onChange={e=>setInputData({...inputData, city:e.target.value})}

                  />
              </label>
              <br></br>
              <div className='btn'>
                <button className='button' type='submit'>submit</button>
              </div>
              
          </form>
        </div>
    </div>
  )
}

export default Add;
