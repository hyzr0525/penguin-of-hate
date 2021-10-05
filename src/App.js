import CardContainer from './CardContainer';
import Header from './Header';
import React, {useState, useEffect} from 'react';
import "./App.css"


function App() {

  const URL = "http://localhost:4000/cards"
  const [cardData, setCardData] = useState([])

  useEffect(()=>{
    fetch(URL)
    .then(res => res.json())
    .then(data => setCardData(data))
  },[])
    

  return (
    <div className="App">
      <Header />
      <CardContainer cardData={cardData} />
    </div>
  );
}

export default App;
