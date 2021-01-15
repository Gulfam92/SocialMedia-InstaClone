const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys')

require('./models/user')

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected', ()=>{
    console.log("connected to mongo DB...")
})
mongoose.connection.on('error', (err)=>{
    console.log("error connecting", err)
})

app.listen(PORT,()=>{
    console.log("server is running on", PORT)
})