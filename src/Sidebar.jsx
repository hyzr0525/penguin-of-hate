import History from "./History"


function Sidebar({cards}){

    return(
        <div>
        <p className="SidebarList">{cards.name}</p>
        </div>
    )
}

export default Sidebar