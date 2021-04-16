import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { CHAR_URL } from './index';

const App = () => {
 const [charData, setCharData] = useState(null);

 useEffect(() => {
  const fetchData = () => {
  axios
   .get(CHAR_URL)
   .then(res => {
     setCharData(res.data);
   })
   .catch(err => {
     return err;
   });
};
  
fetchData();

 }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
