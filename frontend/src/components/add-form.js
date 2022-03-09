import Axios  from 'axios'
import React from 'react'

export default class AddForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            messages:[],
            title:"",
            description:"",
            type:"",
            code:"",
            tags:[]            
        }
    }
    addSnippet=()=>{
        Axios.post('http://localhost:9000'+ '/api/snippets/add', {
            title:this.state.title,
            description:this.state.description,
            type:this.state.type,
            code:this.state.code,
            tags:this.state.tags
        })
        .then(response=>{
            this.setState({messages:[response.data.message]})
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
                    <textarea name="code" onChange={(e)=>this.handleCodeChange(e.target.value)}>

                    </textarea>
                    </div>
                    <div class="form-inputs">
                        <div class="form-input">
                        Title:
                            <input type="text" name="title" onChange={(e)=>this.handleTitleChange(e.target.value)}/>
                        </div>
                        <div class="form-input">
                        Type:
                            <input type="text" name="type" onChange={(e)=>this.handleTypeChange(e.target.value)}/>
                        </div>
                        <div class="form-input">
                            <label>
                            Tags:
                                <input type="text" name="tags" onChange={(e)=>this.handleTagsChange(e.target.value)}/>
                            </label>
                        </div>
                        <div class="form-input">
                            <label>
                            Description:
                                <textarea name="description" onChange={(e)=>this.handleDescriptionChange(e.target.value)}></textarea>
                            </label>
                        </div>
                        <div class="form-input">
                            <button onClick={(e)=>{this.addSnippet()}}>Add</button>
                        </div>
                    </div>
                </div>

       
            </div>
       )
    }
}