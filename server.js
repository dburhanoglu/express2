const express = require('express')
const app = express()
app.use(express.static("public"))//bu dosyadaki tüm dosyaları sürer
app.set("view engine","ejs")

app.get("/",(req,res) =>{
    //res.download('server.js')
   // res.send("hiiii")
   res.render('index', {text:"world"})
})



//router importunu altta yapıyoruz
//başka dosyalar için alttaki ikiliyi tekrar et
const useRouter = require ("./routers/users")//route file 
app.use('/users',useRouter)//routerın başında /users olacak şekilde linklenmesi için




app.listen(3000)
