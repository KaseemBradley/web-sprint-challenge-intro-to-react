import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { CHAR_URL } from './index';
import Character from './components/Character';





const App = () => {
 const [charData, setCharData] = useState([]);


  const fetchChars = () => {
  axios
   .get(CHAR_URL)
   .then(res => {
     setCharData(res.data);
   })
   .catch(err => {
     console.log(err)
   });
}

useEffect(fetchChars, [])
  




  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
       {charData.map(charArray => {
         return <Character key={charArray.name} 
         charData={charArray} />
       })}
      
    </div>
  );
}

export default App;
