import React , {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';

function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Button variant="success" onClick={handleShow}>
        Add Projects
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
               <label> 
                <input type="file" style={{display:'none'}} />
                <img  className='img-fluid w-100 btn' src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" alt="project picture" /></label>
            </div>
            <div className="col-lg-6 mt-5">
                <div className='mb-3'>
                    <input type="text" className="form-control"  placeholder='Project Title'/>
                    </div>
                <div className='mb-3'>
                    <input type="text" className="form-control"  placeholder='Language Used'/>
                    </div>
                <div className='mb-3'>
                    <input type="text" className="form-control"  placeholder='GitHub Link'/>
                    </div>
                <div className='mb-3' ><input type="text" className="form-control"  placeholder='Website Link'/></div>    
                <div className='mb-3' ><input type="text" className="form-control"  placeholder='Project Overview'/></div>

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProject