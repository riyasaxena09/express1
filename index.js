const http=require('http')
const parser=require('body-parser')
const path=require("path")
const express=require('express')
const app=express();
const adminroute1=require('./router/admin')
const adminroute2=require('./router/shop')
app.use(parser.urlencoded({extended:false}));
app.use(adminroute1)
app.use(adminroute2)
app.use((req,res,next)=>{
res.status(404).sendFile(path.join(__dirname,"views","er404.html"))
})
app.listen("3000",()=>{
    console.log("running")
})

