import React from "react"
import Axios from 'axios'
import SnippetCard from "../components/snippet-card"
export default class MainPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            snippets:[]

        }
    }
    componentDidMount(){
        Axios.get('http://localhost:9000/api/snippets')
        .then(res=>this.setState({snippets:res.data.snippets}))
    }
    render=()=>{
        let snippets
        if(this.state.snippets.length > 0){
            snippets = this.state.snippets.map(snippet=>{
                return <SnippetCard data={snippet}/>
            })
            console.log(snippets)
        }
        else{
            snippets = <p>No results found</p>             
        }
        return(
        <div class="page main-page">
            <div class="wrapper">
                <div class="search-bar">
                    <input type="text" name="search"/>
                    <button>Submit</button>
                </div>
                <div class="snippet-cards">
                {snippets}
                </div>
            </div>
        </div>
        )

    }



}