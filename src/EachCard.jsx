import {Link} from 'react-router-dom'
import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'


function EachCard() {

    const [eachCards, setEachCards] = useState(null)
    const [isLoaded, setIsLoaded] =useState(false);



    return (
        <div className="EachCard">
            
          <Link exact to="/">
            <button>Go Back</button>

          </Link>
        </div>
    )
}

export default EachCard
