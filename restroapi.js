var api=require('..//database/db')
var express =require('express')
var app=express()
app.use(express.json())

app.post('/menu',(req,res)=>{

    console.log(req.body)
    var data=api.craeteMenu(req.body.itemName,req.body.price,req.body.description)
    res.send(data)
    
})
app.get('/hello',(req,res)=>{

res.send('hello world')

})
app.listen(3002,()=>console.log('Listining  on port 3002...'))