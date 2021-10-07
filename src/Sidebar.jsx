import History from "./History"
import Search from "./SearchBar"
import {useState} from "react"
import {NavLink} from "react-router-dom"
import UserForms from "./UserForms"


function Sidebar({cards , history, setReadCard, currentUser, setCurrentUser}){
    const [show ,setShow] = useState(false) 
    const [searchKeyWord, setSearchKeyWord] = useState("")

    const filterCards = cards.filter((filteredCard) =>{
        return filteredCard.name.toLowerCase().includes(searchKeyWord.toLowerCase())
    })
   
    return(
    <div>
        <h3>User Login</h3>
        <button onClick={()=>setShow(!show)}>{!show? 'New User?' : "Returning User" }</button>
        <UserForms show={show} setShow={setShow} currentUser={currentUser} setCurrentUser={setCurrentUser}/>    
        <h3>History</h3>
        <History history={history} setReadCard={setReadCard}/>
        <h3>Card Search</h3>
        <Search setSearchKeyWord={setSearchKeyWord}/>
        <h3>Card List</h3>

        
             
        {filterCards.map((card) =>
        <NavLink to={`/eachCard/${card.id}`}>
             <p key={card.id}  className="SidebarList">{card.name}</p>
         </NavLink>    
        )}
        
    </div>
    )
}

export default Sidebar
