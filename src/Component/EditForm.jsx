import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Edit.css';

function EditForm({notes,selectedId,fetchNotes}) {

    const [selectNote,setSelectNote]=useState([]);
    const navigate=useNavigate();

    const fetchnote=async ()=>{
        await axios.get(`http://localhost:3001/users/${selectedId}`)

        .then((res)=>{
            let data=res.data
            setSelectNote(data);

        })
        .catch(error=>console.log(error));

    }

    useEffect(()=>{
        fetchnote();
    },[selectedId])

    const handleSubmit= async (event)=>{
        event.preventDefault();

        await axios.put(`http://localhost:3001/users/${selectNote.id}`, selectNote)
        .then(res=>{
                alert('update successfully..,');
                fetchNotes();
                navigate('/');

            })
        .catch(error=>console.log(error));
        
    }

  return (
    <div className='Edititem'>
        <form onSubmit={handleSubmit} className='editform'>
            <div>
                <label htmlFor='name'>NAME:</label>
                <input 
                    type='text'
                    name='name'
                    className='inp'
                    value={selectNote.name || []}
                    onChange={e=>setSelectNote({...selectNote,name:e.target.value})}

                />
            </div>
            <div>
              <label htmlFor='email'>EMAIL:</label>
                <input
                    type='email'
                    name='email'
                    className='inp'
                    value={selectNote.email || []}
                    onChange={e=>setSelectNote({...selectNote,email:e.target.value})}
                />
              
            </div>
            <div>
              <label htmlFor='phone'>PHONE:  </label>
                <input
                    type='text'
                    className='inp'
                    name='phone'
                    value={selectNote.phone || []}
                    onChange={e=>setSelectNote({...selectNote,phone:e.target.value})}
                />
            
            </div>
            <div>
              <label htmlFor='website'>WEBSITE: </label>
                <input
                    type='text'
                    className='inp'
                    name='website'
                    value={selectNote.website || []}
                    onChange={e=>setSelectNote({...selectNote,website:e.target.value})}
                />
             
            </div>
            <div>
              <label htmlFor='city'>CITY:  </label>
                <input
                    type='text'
                    className='inp'
                    name='city'
                    value={selectNote.city || []}
                    onChange={e=>setSelectNote({...selectNote,city:e.target.value})}
                />    
            </div>
            <div className='btn'>
                <button type='submit' className='button' >Update</button>
            </div>
          </form>
    </div>
  )
}

export default EditForm;
