
import {useState} from 'react'

function Card({card , cardSaver}){
const [savedCard, setSavedCard] = useState(card)
const image = require.context('./cardImages', true)
const cardImage = image(`./${card.name_short}.jpg`).default


function saveCard(){
    setSavedCard(card)
    cardSaver(savedCard)
}


return(
    <div>
    <img src = {cardImage} />
    <br/>
    <button onClick={saveCard}>Save to History</button>
    <h2>{card.value_int}</h2>
    <p><em>{card.name}</em></p>
    <p>Arcana: {card.type}</p>
    <p>Meaning: {card.meaning_up}</p>
    <p>Card Description: {card.desc}</p>
    <hr/>
    </div>
)
}

export default Card