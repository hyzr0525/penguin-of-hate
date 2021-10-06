function History({history, setReadCard}){

    function showHistory(){
        setReadCard('history')
    }

    return(
        <>
        {history.map((card)=> <h4 key={card.id} className="SidebarList" onClick={showHistory}>{card.name}</h4> )}
        </>
    )
}

export default History