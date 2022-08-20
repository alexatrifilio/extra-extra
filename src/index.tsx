import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Home } from './Pages';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      {/* <Route path='/projects' element={<Projects />}>
        <Route path=':id' element={<ProjectDetail />} />
        <Route path='/save' element={<SaveProject />}/>
        <Route path='/save/:id' element={<SaveProject />}/>
      </Route> */}
    </Route>
  </Routes>
</BrowserRouter>

);


