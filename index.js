require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./Routes/routes')
require('./DB/connection')
const hsServer = express()

hsServer.use(cors())
hsServer.use(express.json())
hsServer.use(router)

const PORT = 3000 || process.env.PORT

hsServer.listen(PORT,()=>{
    console.log(`Higher Secondary registration server started at port: ${PORT}`);
})

hsServer.get('/',(req,res)=>{
    res.status(200).send("<h1 style=color:red>Higher Secondary registration server started!!! Waiting for client requests...</h1>")
})