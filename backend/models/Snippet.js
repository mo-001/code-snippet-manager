const mongoose = require('mongoose')
/**
 * @model - Snippet
 * @description - a data model representing a code snippet
 */
const snippetSchema = mongoose.Schema({
    title: String,
    type:String,
    description:String,
    code: String,
    tags:Array
})

module.exports = mongoose.model('Snippet', snippetSchema)