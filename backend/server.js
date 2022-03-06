/** LIBRARIES **/
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const env = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
/** CONSTANTS*/
env.config()

/**APP */
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/api/', require('./api/snippet'))

mongoose.connect(process.env.MONGODB_URL ||'mongodb://localhost:27017/snippet').then(
    app.listen(process.env.PORT, ()=>{
        console.log("Listening in on " + process.env.PORT)
    })
)