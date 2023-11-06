import React , { useState } from 'react'
import { Button, Collapse } from 'react-bootstrap'

function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <div className='mt-5'>
       <div className='d-flex border rounded p-3 justify-content-between'> 
       <h2>Profile</h2>
       <Button  onClick={() => setOpen(!open)} className="btn btn-outline-info"><i class="fa-solid fa-chevron-down fa-beat-fade"></i></Button>
       </div>
       <Collapse in={open}>
         <div className="row shadow p-5  justify-content-center mt-3">
          {/*Upload picture */}
          <label className='text-center' >
              <input  style={{display:'none'}} type="file" />
              <img className='rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTsNQ_jZAod2tDs9LC9VwT_FbzUQUXqoV34A&usqp=CAU" alt="Profile" />
          </label>
          <div className="mt-3">
              <input type="text" className='form-control' placeholder='Username' />
              <input type="text" className='form-control mt-3' placeholder='GitHub ' />
              <input type="text" className='form-control mt-3' placeholder='LinkedIn' />
          </div>
          <div className='mt-3 text-center d-grid'><button className="btn btn-warning">Update</button></div>
         </div>
       </Collapse>
    </div>
  )
}

export default Profile