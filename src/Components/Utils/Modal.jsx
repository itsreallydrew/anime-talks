import React, { useState } from 'react'


function Modal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>
        Warning
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter At Your Own Risk!</Modal.Title>
        </Modal.Header>
        <Modal.Body>This contents of this app may contain mature themes.</Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>
            Close
          </button>
          <button onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal