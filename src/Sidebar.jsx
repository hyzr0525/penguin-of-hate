import History from "./History"
import Search from "./SearchBar"


function Sidebar({cards , history, setReadCard}){

    return(
        <>
            
            <h3>History</h3>
            <History history={history} setReadCard={setReadCard}/>
            <h3>Card Search</h3>
            <Search />
            <h3>Card List</h3>
            {cards.map((card)=> <ul key={card.name} className="SidebarList">{card.name}</ul>)}
            <p className="SidebarList">{cards.name}</p>
        </>
    )
}

export default Sidebar