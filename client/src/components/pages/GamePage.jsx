import React, { useState } from 'react'
import MyModal from '../ui/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function GamePage() {
  const [showModal, setShowModal ] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null); //храним тут вопрос с бд
  
  return (
    <div className='container'> 
      <h2 className='mb-4'>Вопросы по Вашей теме</h2>
      <ListGroup className='mt-4 mb-4 '>
        <ListGroup.Item className="d-flex justify-content-between"> 
          <span>Глубина озера байкал</span> 
          <Button variant="success" onClick={handleShowModal}>Ответить на вопрос</Button> 
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <span>Dapibus ac facilisis in</span>
          <Button variant="success" onClick={handleShowModal}>Ответить на вопрос</Button> 
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <span>Morbi leo risus</span>
          <Button variant="success" onClick={handleShowModal}>Ответить на вопрос</Button> 
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <span>Porta ac consectetur ac</span>
          <Button variant="success" onClick={handleShowModal}>Ответить на вопрос</Button> 
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <span>Vestibulum at eros</span>
          <Button variant="success" onClick={handleShowModal}>Ответить на вопрос</Button> 
        </ListGroup.Item>
      </ListGroup>
      <Button variant="outline-warning">Начать заново</Button>{' '}
      <MyModal 
           show={showModal} 
           onHide={handleCloseModal}
           title="Ответ" //  Заголовок модального окна
           body="" //  Тело модального окна
         />

    </div>
  )
}
