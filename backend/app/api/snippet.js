/**
 * @model - Snippet
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
                data:snippets
            })
        }
        //on failure
        else{
            return res.json({
                message:"No snippets found.",
            })
        }
    })
})


/**
 * @route - /snippets/:id
 * @description - get a single snippet
 */
router.get('/snippets/:id', (req,res)=>{
    Snippet.findOne({_id:req.body.id})
    .then(snippet=>{
        //on success
        if(snippet != null){
            return res.json({
                snippet:snippet
            })
        }
        //on failure
        else{
            return res.json{
                message:"Unable to retrieve snippet",
                error_code: 
            }
        }

    })
})





