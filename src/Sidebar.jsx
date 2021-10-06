import History from "./History"
import Search from "./SearchBar"
import {useState} from "react"
import {NavLink} from "react-router-dom"


function Sidebar({cards , history, setReadCard}){

    const [searchKeyWord, setSearchKeyWord] = useState("")
    const [cardID, setCardID] = useState("")


   
    return(
    <>
            
        <h3>History</h3>
        <History history={history} setReadCard={setReadCard}/>
        <h3>Card Search</h3>
        <Search setSearchKeyWord={setSearchKeyWord}/>
        <h3>Card List</h3>

        
             
        {cards.map((card) =>
        <NavLink to={`/eachCard/${card.id}`}>
             <p key={card.id}  className="SidebarList">{card.name}</p>
         </NavLink>    
        )}
        
    </>
    )
}

export default Sidebar

//id={setCardID(card.id)}  