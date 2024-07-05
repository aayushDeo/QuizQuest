const home = () => {
    return(
        <>
            <h2>letsplayy</h2> 

            <button onClick={()=> navigate(`/createmcq/${params.id}`)}>CreateMCQ</button>
            <button onClick={()=> navigate(`/getallmcqs`)}>View all mcqs</button>
            
        </>
    )
}

export default home 
