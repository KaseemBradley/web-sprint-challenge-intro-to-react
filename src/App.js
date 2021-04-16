import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { CHAR_URL } from './index';

const App = () => {
 const [charData, setCharData] = useState(null);

 useEffect(() => {
   axios
   .get(CHAR_URL)
   .then(res => {
     setCharData(res.data);
   })
   .catch(err => {
     return err;
   });

 }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
