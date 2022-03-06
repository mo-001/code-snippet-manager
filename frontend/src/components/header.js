import React from 'react';
import { Link } from "react-router-dom"

export default class Header extends React.Component{

    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        return(
            <div class="header">
                <div class="wrapper">
                    <div class="logo">
                    </div>
                    
                    <div class="links">
                        <text onClick={(e)=>{this.props.loadModal('add')}}>Add</text>
                        <text onClick={(e)=>{this.props.loadModal('settings')}}>Settings</text>
                    </div>
                </div>
            </div>
        )
        

    }
}

