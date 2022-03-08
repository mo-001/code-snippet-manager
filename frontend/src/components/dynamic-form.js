import React from 'react'
import DetailsForm from './details-form'

const forms = {
    detailsForm:DetailsForm,

}
function DynamicForm(props){
    const SelectForm = forms[props.form]
    return <SelectForm data={props.data}/>
}
export default DynamicForm;