
import './App.css';
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line react-hooks/rules-of-hooks


  

function App() {
  const [item, setItem] = useState([]); 
  
   
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getAdvice()
     
  }, []);

  const  getAdvice =() => {
    fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setItem(data.slip);
        })
        .catch((err) => {
           console.log(err.message);
        });
   

  }
  

  
  return (
    
    <div className="App">
      <div id="box">
        <div id="container">
      
        <p id="num1">Advice #{item.id}<span id="num"></span></p>
        <p id="ad2">"<span id="advice">{item.advice}"</span></p>
      
        <img src="images/pattern-divider-mobile.svg"/>
        <img src="images/pattern-divider-desktop.svg"/>
        <div id="img">
          
        
        <input type="image" src="images/icon-dice.svg" alt="" onClick={getAdvice}/>
      </div>
      
    </div>
    
    
        
    </div>
    </div>
  )
}

export default App
