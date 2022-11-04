var express=require('express')
var bodyParser=require('body-parser')
var app=express()
app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())


app.post('/',(req,res)=>{
    res.send("hello")
})
app.post('/read',(req,res)=>{
    res.send("hello world")
})
app.listen(process.env.PORT|| 3000,()=>{
    console.log("server started")
})