import History from "./History"


function Sidebar({cards , history}){

    return(
        <>
            <h3>History</h3>
            <History history={history}/>
            <h3>Card List</h3>
            {cards.map((card)=> <ul className="SidebarList">{card.name}</ul>)}
        <p className="SidebarList">{cards.name}</p>
        </>
    )
}

export default Sidebar