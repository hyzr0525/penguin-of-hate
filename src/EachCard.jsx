import {Link} from 'react-router-dom'
import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'


function EachCard() {

    const [eachCards, setEachCards] = useState({name_short: "ar19"})
    const [isLoaded, setIsLoaded] =useState(false);
    const image = require.context('./cardImages', true)

    //let cardImage = ""

    //if (eachCards.name_short) {
      const cardImage = image(`./${eachCards.name_short}.jpg`).default    
    //}

    console.log(eachCards);

    const id = useParams().id
    console.log(id)
    useEffect(() => {
        fetch(`http://localhost:4000/cards/${id}`)
        .then(res =>res.json())
        .then(data => {
            return setEachCards(data), setIsLoaded(true)})
    },[id])
    
    if (!isLoaded) return <h1>Loading...</h1>

    return (
        <div className="EachCard">
            <img src={cardImage} alt={eachCards.name} />
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
