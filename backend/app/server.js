/** LIBRARIES **/
const express = require('expresss')
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

mongoose.connect(process.env.MONGODB_URL + "snippet" ||'mongodb://localhost:27017/snippet').then(
    app.listen(process.env.PORT)
)