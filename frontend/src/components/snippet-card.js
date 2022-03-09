import Modal from './modal'
import React from 'react'

export default class SnippetCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
 
    render=()=>{
        let tags
        let modal
        if(this.props.data.tags.length > 0){
            tags = this.props.data.tags.map(tag=>{
                return <span class="card-tag">{tag}</span>
            })
        }
        else{
            tags = <span>No tags found</span>
        }
 
      
        return(
            <div class="snippet-card">
                <div class="card-content">
                    <h3>{this.props.data.title}</h3>
                    {tags}
                    <p>{this.props.data.description}</p>
                </div>
                <Modal form={"detailsForm"} name={"View"} data={this.props.data}/>
            </div>
        )
    }
}

