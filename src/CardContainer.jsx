import Card from "./Card"
import Sidebar from "./Sidebar"
import "./App.css"
import React, {useState, useEffect} from 'react';

function CardContainer(){
    // states
    const URL = "http://localhost:4000/cards"
    const [cardData, setCardData] = useState([])
    const [readCard , setReadCard] = useState(false)
    //variables
    const randomCardData = cardData[Math.floor(Math.random() * cardData.length)]
    


    // functions
    function showCard(){
        setReadCard(!readCard)
    }


    //init fetch
    useEffect(()=>{
    fetch(URL)
    .then(res => res.json())
    .then(data => setCardData(data))
    },[])


    return (
        <>
        <div className="MainContent">
            <button onClick={showCard}>Get a Reading!</button>
            {readCard? <Card card ={randomCardData}/> : null}
        </div>
        <div className="SideBar">
            {cardData.map(cards => <Sidebar cards={cards}/>)}
        </div>
        </>
    )
}

export default CardContainer