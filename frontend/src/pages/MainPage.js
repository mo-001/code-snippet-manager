import React from "react"
import Axios from 'axios'
import SnippetCard from "../components/snippet-card"
export default class MainPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            snippets:[],
            query:""

        }
    }
    componentDidMount(){
        Axios.get('http://localhost:9000/api/snippets')
        .then(res=>this.setState({snippets:res.data.snippets}))
    }
    searchSnippets=()=>{
        Axios.get('http://localhost:9000' + '/api/snippets/' + this.state.query)
        .then(res=>this.setState({snippets:res.data.snippets}))
    }
    handleSearchChange=(text)=>{
        this.setState({query:text})
    }
    render=()=>{
        let snippets
        if(this.state.snippets.length > 0 ){
            snippets = this.state.snippets.map(snippet=>{
                return <SnippetCard data={snippet}/>
            })
        }
        else{
            snippets = <p>No results found</p>             
        }
        return(
        <div class="page main-page">
            <div class="wrapper">
                <div class="search-bar">
                    <input type="text" name="search" onChange={(e)=>{this.handleSearchChange(e.target.value)}}/>
                    <button onClick={(e)=>{this.searchSnippets()}}>Submit</button>
                </div>
                <div class="snippet-cards">
                {snippets}
                </div>
            </div>
        </div>
        )

    }



}