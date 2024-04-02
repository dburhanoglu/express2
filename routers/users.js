
const express = require('express')
const router=express.Router()//bu serverdaki app gibi ama daha çok mini app gibi
router.use(logger)
router.get("/",(req,res) =>{//serverdaki app  yerine burada router
    res.send("users list")
})
router.get("/new",(req,res) =>{
    res.send("users new form")
})

//user/new gibi şekildeydi ama artık hepsinin başında user olacağını biliyoruz zaten
//o yüzden sildik


router.post("/",(req,res) =>{
    res.send("Create user")
})

//put delete get hepsinin pathi aynı ya o yüzden
router.route("/:id").get((req,res) =>{//bunu sona koy çünkü diğer routeları id gibi algılıyor
    res.send(`get user id ${req.params.id}`)
   })
   .put((req,res) =>{//bunu sona koy çünkü diğer routeları id gibi algılıyor
    res.send(`update user id ${req.params.id}`)
   })
   .delete((req,res) =>{//bunu sona koy çünkü diğer routeları id gibi algılıyor
    res.send(`delete user id ${req.params.id}`)
   })

   function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}
   
module.exports = router


/* Bunların kısa hayde yazımı yukarıd  a
router.get("/:id",(req,res) =>{//bunu sona koy çünkü diğer routeları id gibi algılıyor
 res.send(`get user id ${req.params.id}`)
})
router.put("/:id",(req,res) =>{//bunu sona koy çünkü diğer routeları id gibi algılıyor
 res.send(`update user id ${req.params.id}`)
})
router.delete("/:id",(req,res) =>{//bunu sona koy çünkü diğer routeları id gibi algılıyor
 res.send(`delete user id ${req.params.id}`)
})*/