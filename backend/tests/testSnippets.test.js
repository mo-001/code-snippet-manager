/**
 * Mongoose testing via Models
 */
const mockingoose=  require('mockingoose')
const Snippet = require('../models/Snippet')


let test_data = {
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
    new Snippet(test_data).save()
    .then(results=>{
        expect("beepboop")
        .toBe()
    });
    
})

/**
 * @test - delete
 * @description - tests the deletion of document
 * @expected - 
 */
 test('deletes the test from the db',()=>{
    Snippet.findOneAndDelete(test_data)
    .then(results=>{
        expect(results)
        .toBeDefined()
    })
    
})

/**
 * @test - update
 * @description - tests the updation of document
 * @expected
*/
test('updates the test name of test_data from the db',()=>{
    Snippet.findOneAndUpdate(test_data._id,{
        name:"Creating a div"
    })
    .then(results=>{
        expect(results)
        .toBe()
    })
    
})


/**
 * @test - find
 * @description - should find all data and return a collection of documents
 * @expected -
 */
test('finds all data and returns test_data from the db',()=>{
    Snippet.find(test_data)
    .then(results=>{
        expect(results)
        .toBe()
    })
})



/**
 * @test - findOne
 * @description - should find one document and return
 * @expected - 
 */
test('finds the test_data from the db and returns',()=>{
    Snippet.findOne(test_data._id)
    .then(results=>{
        expect(results)
        .toBe()
    })
})



