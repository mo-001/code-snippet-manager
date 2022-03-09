import React from 'react'
import { isCompositeComponent } from 'react-dom/test-utils'
import AddForm from './add-form'
import DeleteForm from './delete-form'
import DetailsForm from './details-form'
import UpdateForm from './update-form'
const forms = {
    detailsForm:DetailsForm,
    addForm:AddForm,
    deleteForm:DeleteForm,
    updateForm:UpdateForm
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
                            <DynamicForm form={this.props.form} data={this.props.data}/>
                        </div>
                    </div>
        }
        else{
            modal = <></>
        }
            return(
                <>
                <text onClick={(e)=>{this.openModal()}}>{this.props.name}</text>
                {modal}
                </>
            )
    }
}