import './App.css';
import Main from './Components/Main';
import React from 'react';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
