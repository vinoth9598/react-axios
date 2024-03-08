import React, { useState } from 'react';
import EditForm from './EditForm';

function Edit({notes,fetchNotes}) {

  const [selectedId,setSelectedId]=useState('Select an ID')

  return (
    <div>
        <div className='edit'>
            <h2>Update Note</h2>
            <label>
              Select the ID to update:&nbsp;&nbsp;
                <select
                value={selectedId}
                onChange={e=>setSelectedId(e.target.value)}
                >
                  <option>{'Select an ID'}</option>
                    {
                      notes.map(note=>
                        <option key={note.id}>{note.id}</option>
                      )
                    }
                </select>
            </label>
          <div>
              {
                selectedId !== 'Select an ID' && <EditForm
                  notes={notes} selectedId={selectedId} fetchNotes={fetchNotes}/>
              }
       
              </div>
        </div>
    </div>
  )
}

export default Edit;
