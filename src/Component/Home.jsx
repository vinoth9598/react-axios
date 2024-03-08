import axios from 'axios';
import React from 'react';

import { Link } from 'react-router-dom';


function Home({notes,fetchNotes}) {


    const handleDelete=(id)=>{
       let confu= window.confirm('Do you delete note confirm');
       if(confu){
            axios.delete('http://localhost:3001/users/' + id)
            .then((res)=>{
                alert('delete note success');

            }).catch(err=>console.log(err));
        
           
       }
       fetchNotes();
       
    }
   
  return (
    <div className='content'>
        <div className='head'><h2>CRUD APPLICATIONS</h2></div>
        <div className='add'><Link to='create'>Add Note +</Link></div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>WEBSITE</th>
                        <th>CITY</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notes.map(note=>
                            <tr key={note.id}>
                                <td>{note.id}</td>
                                <td>{note.name}</td>
                                <td>{note.email}</td>
                                <td>{note.phone}</td>
                                <td>{note.website}</td>
                                <td>{note.city}</td>
                                <td>
                                    <Link to='/update'>Edit</Link>
                                    <button onClick={()=>handleDelete(note.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}



export default Home;
