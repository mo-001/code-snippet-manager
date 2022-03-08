import React from 'react'
function DetailsForm(props){
    return(
        <div class="form dynamic-form">
            <div class="form-code">
                //insrty highlight code here
            </div>
            <div class="form-inputs">
                <div class="form-input">
                    <input type="text" name="title" value={props.data.title}/>
                </div>
                <div class="form-input">
                    <input type="text" name="description" value={props.data.description} multiple/>
                </div>
                <div class="form-input">
                    <input type="text" name="" value={props.data.title}/>
                </div>
            </div>
  
        </div>
        
    )
}

export default DetailsForm;