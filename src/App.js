import logo from './logo.svg';
import {useState,useEffect} from 'react'
import './App.css';


function App() {

  return (
    <div className="App">
     <form className='my-form'>
      <label htmlFor="Name">
        <p>Name</p>
      </label>
      <input type="text" />
     </form>
    </div>
  );
}

export default App;
