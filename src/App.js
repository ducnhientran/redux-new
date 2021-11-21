import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Header from './components/nav/Header';
import NotFound from './components/notfound';

import EditPhoto from './features/photo/pages/edit';
import MainPage from './features/photo/pages/main';
import MainPost from './features/post/pages/main';
import TodosPage from './features/todos/pages/main';

function App() {
  return (
    // <div className='App'>
      <Suspense fallback={<div>Loading ...</div>}> 
        <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/" element ={<MainPost/>}/>
              <Route path="/photos" element ={<MainPage/>}/>
              <Route path="/photos/:photoId" element={<EditPhoto/>}/>
              <Route path="/todos" element ={<TodosPage/>}/>
              <Route path="/about" element ={<About/>}/>
              <Route path="/user" element={<About/>} />
              <Route path="*" element={<NotFound/>} />
          </Switch>
        </BrowserRouter>
     </Suspense>
    // </div>
  );
}
export default App;
