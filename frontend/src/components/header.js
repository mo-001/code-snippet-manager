import React from 'react';
import { Link } from "react-router-dom"
import Modal from './modal'
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
                        <Modal form={"addForm"} name={"Add"} data={null}/>
                    </div>
                </div>
            </div>
        )
        

    }
}

