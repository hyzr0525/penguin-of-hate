import {Link} from 'react-router-dom'
import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'


function EachCard() {

    const [eachCards, setEachCards] = useState([])
    const [isLoaded, setIsLoaded] =useState(false);

    const id = 1
    const image = require.context('./cardImages', true)
    const cardImage = image(`./${eachCards.name_short}.jpg`).default

    console.log(eachCards.name)
    useEffect(() => {
        fetch(`http://localhost:4000/cards/${id}`)
        .then(res =>res.json())
        .then(cards => {
            return setEachCards(cards), setIsLoaded(true)})
    },[])
    
    if (!isLoaded) return <h1>Loading...</h1>


    return (
        <div className="EachCard">
            <img src = {cardImage} />
            <br/>
            <h2>{eachCards.value_int}</h2>
            <p><em>{eachCards.name}</em></p>
            <p>Arcana: {eachCards.type}</p>
            <p>Meaning: {eachCards.meaning_up}</p>
            <p>Card Description: {eachCards.desc}</p>
            <hr/>
          <Link exact to="/">
            <button>Go Back</button>
          </Link>
        </div>
    )
}

export default EachCard
