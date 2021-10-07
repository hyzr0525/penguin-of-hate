import {useState} from 'react'

function Card({card , id , cardButton, currentUser}){
const [savedCard, setSavedCard] = useState(card)
const image = require.context('./cardImages', true)
const cardImage = image(`./${card.name_short}.jpg`).default


function saveCard(){
    // setSavedCard(card)
    setSavedCard({ ...card, userId:currentUser.id})
    console.log(savedCard)
    cardButton(savedCard)
}
function createButton(){
    if(id === 'history'){
    return (<button onClick={()=>cardButton(card)}>Delete Card</button>)
    }else{
        return ( <button id="saveHisBtn" onClick={saveCard}>Save Card to History</button> )
    }
}

return(
    <div className='cardDiv'>
    <img src = {cardImage} alt={card.name} />
    <br/>
    {createButton()}
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