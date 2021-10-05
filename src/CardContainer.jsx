import Card from "./Card"
import Sidebar from "./Sidebar"
import "./App.css"
import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {Route, Switch} from 'react-router-dom'




function CardContainer(){
    // states
    const URL = "http://localhost:4000/cards"
    const [cardData, setCardData] = useState([])
    const [readCard , setReadCard] = useState('')
    const [cardHistory, setCardHistory] = useState([])
    //variables
    const randomCardData = cardData[Math.floor(Math.random() * cardData.length)]
    


    // functions
    function showCard(e){
        setReadCard(e.target.name)
    }
    
    function cardSaver(card){
        setCardHistory([...cardHistory, card])
        setReadCard('history')
    }
    console.log(cardHistory)

    //init fetch
    useEffect(()=>{
    fetch(URL)
    .then(res => res.json())
    .then(data => setCardData(data))
    },[])


    return (
        <>
         <div className="SideBar">
            {cardData.map(cards => <Sidebar cards={cards}/>)}
        </div>

        <div className="MainContent">
            <button name='single' onClick={(e)=>showCard(e)}>Get a Reading!</button>
            <button name='reset' onClick={(e)=>showCard(e)}>Reset</button>
            {/* <button name='three' onClick={(e)=>showCard(e)}>Three Card Spread</button> */}
            {readCard === 'single'? <Card cardSaver={cardSaver} card ={randomCardData}/> : null}
            
        </div>
        </>
    )
}

export default CardContainer

// History tracker: set a state to an array, and then add cards to said array. Spread the array each time so that the info is saved. 