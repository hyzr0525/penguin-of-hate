import Card from "./Card"
import Sidebar from "./Sidebar"
import "./App.css"


function CardContainer({cardData}){

    return (
        <>
        <div className="MainContent">
        {cardData.map(cards => <Card cards= {cards}/>)}
        </div>
        <div className="SideBar">
            {cardData.map(cards => <Sidebar cards={cards}/>)}
        </div>
        </>
    )
}

export default CardContainer