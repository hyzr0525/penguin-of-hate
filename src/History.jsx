function History({history}){
    
    
    return(
        <>
        {history.map((card)=> <h4>{card.name}</h4> )}
        </>
    )
}

export default History