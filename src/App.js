import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import GlobalLayout from './Layouts/GlobalLayout';
import HomePage from './Pages/HomePage';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <GlobalLayout/>,
      children: [
        {
          index: true,
          element: <HomePage/>
        }
      ]
    }

  ])
  return (
    <RouterProvider router={router}/>
   
  );
}

export default App;
