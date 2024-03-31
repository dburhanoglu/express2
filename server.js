const express = require('express')
const app = express()

app.set("view engine","ejs")

app.get("/",(req,res) =>{
    res.download('server.js')
   // res.send("hiiii")
   res.render('index')
})

app.listen(3000)
