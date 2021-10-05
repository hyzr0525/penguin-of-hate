import cardImage from './cardImages/ar00.jpg'

function Card({card}){


return(
    <div>
    <img src = {cardImage} />
    <p><em>{card.name}</em></p>


    <p>Arcana: {card.type}</p>
    <p>Meaning: {card.meaning_up}</p>
    <p>Card Description: {card.desc}</p>
    <hr/>
    </div>
)
}

export default Card