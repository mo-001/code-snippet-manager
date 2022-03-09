import React from 'react'
import Modal from './modal'
function DetailsForm(props){
    let tags = []
    for(let tag of props.data.tags){
        tags.push(<span class="card-tag">{tag}</span>)
    }
    return(
        <div class="form dynamic-form">
        <div class="form-heading">
            <h1>Details of Snippet {props.data._id}</h1>
            <hr></hr>
            </div>
        <div class="form-success">
        </div>
        <div class="form-info">
            <div class="form-code">
            <pre name="code">
                <code>
                {props.data.code}

                </code>
            </pre>
            </div>
            <div class="form-inputs">
                <div class="form-input">
                Title:
                    <input disabled type="text" name="title" value={props.data.title}/>
                </div>
                <div class="form-input">
                Type:
                    <input type="text" name="type" value={props.data.type}/>
                </div>
                <div class="form-input">
                Tags:
                    <div class="form-input-tags">
                        {tags}
                    </div>
                </div>
                <div class="form-input">
                    <label>
                    Description:
                        <textarea name="description" value={props.data.description}></textarea>
                    </label>
                </div>
                <Modal form={"deleteForm"} name={"Delete"} data={props.data}/>
            </div>
        </div>
    </div>
        
    )
}

export default DetailsForm;