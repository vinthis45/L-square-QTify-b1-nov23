import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from './Pages/Homepage/Homepage';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
{
  path: "/",
  element: <App/>,
  children: [
    {
      path: "/",
      element: <Homepage/>
    }
  ]
}

]

)
  
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
