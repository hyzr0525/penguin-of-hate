import cardImage from './cardImages/ar03.jpg'
import {useState} from 'react'

function Card({card}){
const [savedCard, setSavedCard] = useState()
const emptyCard = {
    "name":"",
    "type":"",
    "meaning_up":"",
    "meaning_rev":"",
    "desc":"",



}

return(
    <div>
    <img src = {cardImage} />
    <br/>
    <button>Save to History</button>
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