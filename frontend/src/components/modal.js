import React from 'react'
import { isCompositeComponent } from 'react-dom/test-utils'
import DetailsForm from './details-form'
const forms = {
    detailsForm:DetailsForm,

}

function DynamicForm(props){
    const SelectForm = forms[props.form]
    return <SelectForm data={props.data}/>
}


export default class Modal extends React.Component{
    constructor(props){
        super(props)
        this.state={
            display:false,
            data:this.props.data,
            form:this.props.form
        }
    }
    openModal=()=>{
        this.setState({display:true})
    }
    closeModal=()=>{
        this.setState({display:false})

    }
  
    render=()=>{
        let modal
        if(this.state.display){
            modal =  <div className="outer-modal">
                        <div className="inner-modal">
                            <button onClick={(e)=>{this.closeModal()}}>close</button>
                            <DynamicForm form={this.state.form} data={this.state.data}/>
                        </div>
                    </div>
        }
        else{
            modal = <></>
        }
            return(
                <>
                <button onClick={(e)=>{this.openModal()}}>View</button>
                {modal}
                </>
            )
    }



}