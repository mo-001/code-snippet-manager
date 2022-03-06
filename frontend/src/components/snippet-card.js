function SnippetCard(props){
    console.log(props.data)
    let tags
    if(props.data.tags.length > 0){
        tags = props.data.tags.map(tag=>{
            return <span class="card-tag">{tag}</span>
        })
    }
    else{
        tags = <span>No tags found</span>
    }
    return(
        <div class="snippet-card">
            <div class="card-content">
                <h3>{props.data.title}</h3>
                {tags}
                <p>{props.data.description}</p>
            </div>
        </div>
    )

}

export default SnippetCard;