const express = require('express')
require('./src/db/mongoose')
const app = express()
const cors= require('cors')
const port = 9000

app.use(express.json())
app.use(cors())
const userRouter=require('./src/routers/user')
app.use(userRouter)
const bookRouter= require('./src/routers/book')
app.use(bookRouter)


app.listen(port, ()=>{
  console.log('Your projects is up and running!!!!!!')
})


//npm install --save cors
