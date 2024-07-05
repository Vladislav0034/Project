import React from 'react';
import MainPage from './components/pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import GamePage from './components/pages/GamePage';

function App() {
  return (
    <>
      <MainPage />
      <GamePage />
    </>
  );
}

export default App;
