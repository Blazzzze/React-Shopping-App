const Node = ({nots}) => {
    
    return <div>
        <h1>Notes: </h1>
        {nots.map((note,index) => (
            // <p>{note.name}</p>
            <p key={index}>
                <h2>{note.name}</h2>
            </p> 
        ))}
        </div>
  
};

export default Node
