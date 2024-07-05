import React from 'react';

export default function ListGroup({ text }) {
  return (
    <ListGroup className="mt-4 mb-4 ">
      <ListGroup.Item className="d-flex justify-content-between">
        <span>{text.themeQuest}</span>
        <Button variant="success" onClick={handleShowModal}>
          Ответить на вопрос
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
}
