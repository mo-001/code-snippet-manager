import Axios  from 'axios'
import React from 'react'
import { Navigate } from 'react-router-dom'
export default class DeleteForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            delete_confirmed:false,
            messages:[]
        }
    }
    deleteSnippet=()=>{
        Axios.delete('http://localhost:9000' +'/api/snippets/remove',{
            _id:this.props.data._id
        })
        .then(response=>{
            if(response.data.success){
                this.setState({
                    delete_confirmed:true,
                })
            }
            else{
                this.setState({messages:[response.data.message]})
            }}
        )
        .catch()

    }
    render=()=>{
        if(this.delete_confirmed){
            return(<Navigate to="/"/>)
        }
        return(
        <div class="form dynamic-form">
        <div class="form-heading">
            <h1>Delete snippet {this.props.data._id}</h1>
            <hr></hr>
            </div>
        <div class="form-success">
            {this.state.messages}
        </div>
        <div class="delete-confirm">
            <p>Are you sure you want to delete this snippet?</p>
            <button onClick={(e)=>{this.deleteSnippet()}}>Yes</button>
            <button onClick={(e)=>{}}>No</button>
        </div>
        </div>
        )
    }
}
