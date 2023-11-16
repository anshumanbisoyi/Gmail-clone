import React from "react";
import Signin from "./components/Signin";
import Main from "./components/Main";
import {Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Signin />}/>
      <Route path='/main' element={<Main/>}/>
    </Routes>
    </div>
  );
}

export default App;
