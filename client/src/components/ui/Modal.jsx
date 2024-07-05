import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function MyModal({ show, onHide, title, body, saveButtonText }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{body}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Close</Button>
          <Button variant="primary" onClick={onHide}>{saveButtonText || 'Save changes'}</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

