const express = require('express')
const userRoutes = require('./routes/userRoutes')
const videoRoutes = require('./routes/videoRoutes')
//const apiRoutes = require('./routes/apiRoutes')
//const jwt = require('jsonwebtoken')
require('dotenv').config()
require('./db')

const app = express()

app.use(express.json())
//app.use(apiRoutes)
app.use(userRoutes)
app.use(videoRoutes)


app.listen(8080, ()=>{
    console.log('Get Set Gooooo!!!')
})