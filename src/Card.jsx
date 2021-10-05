

function Card({card}){


return(
    <div>
    <img src={card.name_short} />
    <p><em>{card.name}</em></p>
    <p>Arcana: {card.type}</p>
    <p>Meaning: {card.meaning_up}</p>
    <p>Card Description: {card.desc}</p>
    <hr/>
    </div>
)
}

export default Card