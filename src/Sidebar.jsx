import History from "./History"
import Search from "./SearchBar"
import {useState} from "react"
import {NavLink} from "react-router-dom"


function Sidebar({cards , history}){

    const [searchKeyWord, setSearchKeyWord] = useState("")

    return(
        <>
            
            <h3>History</h3>
            <History history={history}/>
            <Search />
            <h3>Card List</h3>

         <NavLink to={'/eachCard/1'}>
            {cards.map((card)=> <ul className="SidebarList">{card.name}</ul>)}
         </NavLink>
        </>
    )
}

export default Sidebar