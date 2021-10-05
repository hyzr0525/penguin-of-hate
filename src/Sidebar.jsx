import History from "./History"
import "./App.css"


function Sidebar({cards}){

    return(
        <div>
        <p className="SidebarList">{cards.name}</p>
        </div>
    )
}

export default Sidebar