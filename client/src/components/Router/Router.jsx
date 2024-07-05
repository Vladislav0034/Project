import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import MainPage from '../pages/MainPage';
import GamePage from '../pages/GamePage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/game/:id',
    element: <GamePage/>
  }
]);

export default router
