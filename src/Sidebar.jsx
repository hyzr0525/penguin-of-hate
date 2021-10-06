import History from "./History"
import Search from "./SearchBar"
import {useState} from "react"
import {NavLink} from "react-router-dom"


function Sidebar({cards , history, setReadCard}){

    const [searchKeyWord, setSearchKeyWord] = useState("")
    
    console.log(cards.name)

    return(
    <>
            
        <h3>History</h3>
        <History history={history} setReadCard={setReadCard}/>
        <h3>Card Search</h3>
        <Search />
        <h3>Card List</h3>

        
             
        <NavLink to={`/eachCard/1`}>
             
            
             <p key={cards.id} className="SidebarList">{cards.name}</p>
            
             
        </NavLink>
    </>
    )
}

export default Sidebar