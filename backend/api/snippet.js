/**
 * @api - Snippet
 * @description - used to fetch, create, update, and delete code snippets
 */

/** DECLARATIONS */
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const Snippet = require('../models/Snippet')


/**
 * @route - /snippets
 * @description - get all snippets in the collection
 */
router.get('/snippets', (req,res)=>{
    Snippet.find({})
    .then(snippets=>{
        //on success
        if(snippets.length > 0){
            return res.json({
                snippets:snippets,
                success:true
            })
        }
        //on failure
        else{
            return res.json({
                message:"No snippets found.",
                sucess:true
            })
        }
    })
})


/**
 * @route - /snippets/:title
 * @description - search for snippets
 */
router.get('/snippets/:title', (req,res)=>{
    Snippet.find({})
    .then(snippets=>{
        //on success
        if(snippets){
            let snippets_array = snippets.filter(snippet=>{
                let query = snippet.title
                if(query.toString().includes(req.params.title)){
                    return snippet
                }
            })
            return res.json({
                snippets:snippets_array,
                success:true
            })
        }
        //on failure
        else{
            return res.json({
                message:"Unable to retrieve snippets",
                error:true
            })
        }

    })
})

/** 
 * @route - /snippets/update
 * @description - updates a snippet based on id
 */
router.put('/snippets/update', (req,res)=>{
    Snippet.findOneAndUpdate({_id:req.body._id},{
        title:req.body.title,
        description:req.body.description,
        type:req.body.type,
        code:req.body.code,
        tags:req.body.tags
    })
    .then(snippet=>{
        //on sucess
        if(snippet){
            return res.json({
                success:true,
                message:"Snippet sucessfully updated"

            })
        }
        //on failure
        else{
            return res.json({
                error:true,
                message:"Snippet failed to update"
            })

        }
    })

})
/** 
 * @route - /snippets/add
 * @description - adds a snippet based on provided information
 */
router.post('/snippets/add', (req,res)=>{
    //setting var to fields for validation
    let title_to_add = req.body.title;
    let description_to_add = req.body.description;
    let type_to_add = req.body.type;
    let code_to_add = req.body.code;
    let tags_to_add = req.body.tags;
    //on valid fields
    if(title_to_add
    && description_to_add
    && type_to_add
    && code_to_add
    && tags_to_add){
        let new_snippet = new Snippet({
            title:title_to_add,
            description:description_to_add,
            type:type_to_add,
            code:code_to_add,
            tags:tags_to_add
        })
        .save()
        .then(snippet=>{
            //on success
            if(snippet){
                return res.json({
                    message:"Snippet successfully added",
                    success:true
                })
            }
            //on failure
            else{
                return res.json({
                    message:"Add operation failed",
                    error:true
                })
            }
        })
    }
    //on validiation failure
    else{
        return res.json({
            message:"Fields not validated properly",
            error:true
        })
    }
})
/** 
 * @route - /snippets/remove
 * @description - removes a snippet based on id
 */
router.delete('/snippets/remove', (req,res)=>{
    Snippet.findOneAndDelete({_id:req.body._id})
    .then(snippet=>{
        //on success
        if(snippet){
            return res.json({
                message:"Deleted snippet successfully",
                success:true
            })
        }
        //on failure
        else{
            return res.json({
                message:"Unable to delete snippet",
                error:true
            })
        }
    })

})

module.exports = router