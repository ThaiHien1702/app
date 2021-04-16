import { Fragment } from 'react';
import './App.css';
import Navbar from './compoments/navbar'
import Vocabuary from './compoments/vocabulary'

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Vocabuary></Vocabuary>
    </Fragment>
  );
}

export default App;
