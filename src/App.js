import React from 'react';
import './App.css';
import { CardBalance } from './components/CardBalance/CardBalance';
import { Main } from './components/Main/Main';
import {Grid} from '@material-ui/core'
function App() {
  return (
    <div className="App">
    <Main />
      <CardBalance/>
      
    </div>
  );
}

export default App;
