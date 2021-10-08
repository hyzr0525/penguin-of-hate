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
        <h2>User Login</h2>
        <button onClick={()=>setShow(!show)}>{!show? 'New User?' : "Returning User" }</button>
        <UserForms show={show} setShow={setShow} currentUser={currentUser} setCurrentUser={setCurrentUser}/>    
        <hr/>
        <h2>History</h2>
        <History history={history} setReadCard={setReadCard}/>
        <hr/>
        <h2>Card Search</h2>
        <Search setSearchKeyWord={setSearchKeyWord}/>
        <h2>Card List</h2>

        
             
        {filterCards.map((card) =>
        <NavLink to={`/eachCard/${card.id}`}>
             <p key={card.id}  className="SidebarList">{card.name}</p>
         </NavLink>    
        )}
        
    </div>
    )
}

export default Sidebar
