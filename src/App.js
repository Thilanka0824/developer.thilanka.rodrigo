import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import GlobalLayout from './Layouts/GlobalLayout';
import HomePage from './Pages/HomePage';
import ResumePage from './Pages/ResumePage';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <GlobalLayout/>,
      children: [
        {
          index: true,
          element: <HomePage/>
        },
        {
          path: "resume",
          element: <ResumePage/>
        }
      ]
    }

  ])
  return (
    <RouterProvider router={router}/>
   
  );
}

export default App;
