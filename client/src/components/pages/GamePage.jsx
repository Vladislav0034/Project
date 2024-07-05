import React, { useState, useEffect } from 'react';
import MyModal from '../ui/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

export default function GamePage() {
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [questions, setQuestions] = useState([]) //храним тут вопрос с бд

  useEffect(() => {
    if (!Number.isNaN(+id)) {
      fetch(`/api/decks/${id}`)
        .then((data) => data.json())
        .then((card) => setQuestions(card));
    }

    if (Number.isNaN(+id)) {
      return <h1>Неверный ID</h1>;
    }
  }, [id]);

  return (
    <div className="container">
      <h2 className="mb-4">Вопросы по Вашей теме</h2>
      <ListGroup className="mt-4 mb-4 ">
       {questions.map((question, index) => (
         <ListGroup.Item key={index} className="d-flex justify-content-between">
           <span>{question.themeQuest}</span> {/*  Замените "text" на поле, которое хранит текст вопроса в вашей базе данных */}
           <Button variant="success" onClick={() => { 
             handleShowModal(); 
             setSelectedQuestion(question); // Установите выбранный вопрос
           }}>
             Ответить на вопрос
           </Button>
         </ListGroup.Item>
       ))}
     </ListGroup>
      <Button variant="outline-warning">Начать заново</Button>{' '}
      <MyModal
        show={showModal}
        onHide={handleCloseModal}
        title="Ответ" //  Заголовок модального окна
        body="" //  Тело модального окна
      />
    </div>
  );
}
