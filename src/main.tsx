import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   
    <Router basename="/">
      <Routes>
    <Route path='/*' element={<App/>} />
    </Routes>
    </Router>
   
  </React.StrictMode>
);