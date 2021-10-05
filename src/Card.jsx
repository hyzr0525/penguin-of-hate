

function Card({cards}){


return(
    <div>
    <img src={cards.name_short} />
    <p>{cards.name}</p>
    <p>{cards.type}</p>
    <p>{cards.desc}</p>
    <hr/>
    </div>
)
}

export default Card