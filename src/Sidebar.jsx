import History from "./History"
import Search from "./SearchBar"
import {useState} from "react"
import {NavLink} from "react-router-dom"


function Sidebar({cards , history, setReadCard}){

    const [searchKeyWord, setSearchKeyWord] = useState("")

    return(
        <>
            
            <h3>History</h3>
            <History history={history} setReadCard={setReadCard}/>
            <h3>Card Search</h3>
            <Search />
            <h3>Card List</h3>

         
             <ul>
            {cards.map((card) => {
               <NavLink to={'/eachCard/1'}> 
                 <li key={card.id} className="SidebarList">{card.name}</li>
                 </NavLink>
                })
                
            }
            </ul>
         
        </>
    )
}

export default Sidebar