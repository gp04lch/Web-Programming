const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req,res)=>{
  res.send("something la")
})

server = app.listen(3000)
