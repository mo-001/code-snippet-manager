const mongoose = require('mongoose')
/**
 * @model - Snippet
 * @description - a data model representing a code snippet
 */
const snippetSchema = mongoose.Schema({
    title: String,
    description:String,
    code: String,
    tags:{default:Array}


    
})

module.exports = mongoose.model('Snippet', snippetSchema)