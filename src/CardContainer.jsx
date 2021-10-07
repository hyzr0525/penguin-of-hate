import Card from "./Card"
import Sidebar from "./Sidebar"
import "./App.css"
import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import EachCard from "./EachCard";




function CardContainer(){
    // states
    const [cardData, setCardData] = useState([])
    const [readCard , setReadCard] = useState('')
    const [cardHistory, setCardHistory] = useState([])
    
    //variables
    const historyURL = 'http://localhost:4000/history'
    const URL = "http://localhost:4000/cards"
    const randomCardData = cardData[Math.floor(Math.random() * cardData.length)];
    const threeCardData = [cardData[Math.floor(Math.random() * cardData.length)] , cardData[Math.floor(Math.random() * cardData.length)] , cardData[Math.floor(Math.random() * cardData.length)] ]
    


     
    // functions
    function showCard(e){
        setReadCard(e.target.name)
    }
    
    function cardSaver(card){
        
        fetch(historyURL, {
            method : 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(card)
        })
        .then(res => res.json())
        .then(data => {
        setCardHistory([...cardHistory, card])
        setReadCard('history')
        })
    }
    
    function DeleteCard(card){
        fetch(`${historyURL}/${card.id}`,{
            method : 'DELETE'
        })
        .then(res=>res.json)
        .then(data => {
            const filteredCards = cardHistory.filter(c => c.id !== card.id)  
            setCardHistory(filteredCards)
        })
    }

    //init fetch
    useEffect(()=>{
    fetch(URL)
    .then(res => res.json())
    .then(data => setCardData(data))
    
    
     fetch(historyURL)
    .then(res => res.json())
    .then(data => {
        setCardHistory(data)
    })
    } , []
    )
    
    return (
        <>
        
         <div className="SideBar">
           <Sidebar cards={cardData} history={cardHistory} setReadCard={setReadCard}/>
         </div>
        <Switch>
            <Route exact path="/">
             <div className="MainContent">
                
                     <button name='single' onClick={(e)=>showCard(e)}>Get a Reading!</button>
                     <button name='reset' onClick={(e)=>showCard(e)}>Reset</button>
                     <button name='three' onClick={(e)=>showCard(e)}>Three Card Spread</button>
                 {readCard === 'three'? threeCardData.map((card)=> <Card card={card} cardButton={cardSaver}/>) : null} 
                 {readCard === 'single'? <Card  card ={randomCardData} id={'random'} cardButton={cardSaver} /> : null}
                 {readCard === 'history'? cardHistory.map((card)=> <Card key={card.id} card={card} id={'history'} cardButton={DeleteCard}/>) : null }
             </div>
            </Route>

            <Route exact path="/eachCard/:id">
                <EachCard />
            </Route>

            
        </Switch>
        </>
    )
}

export default CardContainer

// History tracker: set a state to an array, and then add cards to said array. Spread the array each time so that the info is saved. 