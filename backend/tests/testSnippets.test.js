/**
 * Mongoose testing via Models
 */
const mongoose = require('mongoose')
const Snippet = require('../models/Snippet')


let test_data = {
    _id:"test_data",
    title:"Centerin a div",
    description:"In HTML - this will allow centering of a div.",
    tags:["html", "css", "js"],
    code:"body{margin:auto};",
    type:"CSS"
}

/**
 * @test - add
 * @description - tests the insertion into model
 * @expected - 
 */
test('saves a new snippet to the db',()=>{
    expect(new Snippet(test_data).save())
    .toBe()
})

/**
 * @test - delete
 * @description - tests the deletion of document
 * @expected - 
 */
 test('deletes the test from the db',()=>{
    expect(Snippet.findOneAndDelete(test_data._id))
    .toBe()
})

/**
 * @test - update
 * @description - tests the updation of document
 * @expected
*/
test('updates the test name of test_data from the db',()=>{
    expect(
        Snippet.findOneAndUpdate(test_data._id,{
            name:"Creating a div"
        })
    )
    .toBe()
})


/**
 * @test - find
 * @description - should find all data and return a collection of documents
 * @expected -
 */
test('finds all data and returns test_data from the db',()=>{
    expect(Snippet.find(test_data))
    .toBe()
})



/**
 * @test - findOne
 * @description - should find one document and return
 * @expected - 
 */
test('finds the test_data from the db and returns',()=>{
    expect(Snippet.findOne(test_data._id))
    .toBe()
})



