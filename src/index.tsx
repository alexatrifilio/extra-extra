import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import App from './App';
import { Extras, Home, Projects, SaveExtra } from './Pages';
import { SaveProject } from './Pages/Projects/Save';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='/projects' element={<Projects />}>
          {/* <Route path=':id' element={<ProjectDetail />} /> */}
          <Route path='/save' element={<SaveProject />}/>
          <Route path='/save/:id' element={<SaveProject />}/>
        </Route>
        <Route path='/extras' element={<Outlet />}>
          <Route index element={<Extras />}/>
          <Route path='save' element={<SaveExtra />} />
        </Route>
      </Route>
    </Routes>
</BrowserRouter>

);


