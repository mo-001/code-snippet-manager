import Axios  from 'axios'
import React from 'react'

export default class UpdateForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            messages:[],
            title:this.props.data.title,
            description:this.props.data.description,
            type:this.props.data.type,
            code:this.props.data.code,
            tags:this.props.data.tags,
            update_confirmed:false            
        }
    }
    updateSnippet=()=>{
        Axios.put('http://localhost:9000'+ '/api/snippets/update',{
            _id:this.props.data._id,
            title:this.state.title,
            description:this.state.description,
            type:this.state.type,
            code:this.state.code,
            tags:this.state.tags
        })
        .then(response=>{
            this.setState({messages:[response.data.message], update_confirmed:true})
        })
        .catch()
    }

    handleTitleChange=(text)=>{
        console.log(text)
        console.log(this.state)
        this.setState({
            title:text
        })


    }
    handleDescriptionChange=(text)=>{
        this.setState({
            description:text
        })
    }
    handleTypeChange=(text)=>{
        this.setState({
            type:text
        })
    }
    handleCodeChange=(text)=>{
        this.setState({
            code:text
        })
    }
    handleTagsChange=(texts)=>{
        let tags = texts.split(',')
        this.setState({
            tags:tags
        })
    }
    render=()=>{
        if(this.state.update_confirmed){
            window.location.reload(false)
        }
       return(
            <div class="form dynamic-form">
                <div class="form-heading">
                    <h1>Add a new snippet</h1>
                    <hr></hr>
                    </div>
                <div class="form-success">
                {this.state.messages}
                </div>
                <div class="form-info">
                    <div class="form-code">
                    <textarea name="code" value={this.state.code} onChange={(e)=>this.handleCodeChange(e.target.value)}>

                    </textarea>
                    </div>
                    <div class="form-inputs">
                        <div class="form-input">
                        Title:
                            <input type="text" name="title" value={this.state.title} onChange={(e)=>this.handleTitleChange(e.target.value)}/>
                        </div>
                        <div class="form-input">
                        Type:
                            <input type="text" name="type" value={this.state.type}  onChange={(e)=>this.handleTypeChange(e.target.value)}/>
                        </div>
                        <div class="form-input">
                            <label>
                            Tags:
                                <input type="text" name="tags" value={this.state.tags}  onChange={(e)=>this.handleTagsChange(e.target.value)}/>
                            </label>
                        </div>
                        <div class="form-input">
                            <label>
                            Description:
                                <textarea name="description" value={this.state.description} onChange={(e)=>this.handleDescriptionChange(e.target.value)}></textarea>
                            </label>
                        </div>
                        <div class="form-input">
                            <button onClick={(e)=>{this.updateSnippet()}}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
       )
    }
}