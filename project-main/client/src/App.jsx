import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import HomePage from './pages/HomePage';
import FaqPage from './pages/FaqPage'; // ✅ Import the FAQ page

const router = createBrowserRouter([
  {
    path: '/', // Home route
    element: <HomePage />,
  },
  {
    path: '/faq', // ✅ FAQ route
    element: <FaqPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
