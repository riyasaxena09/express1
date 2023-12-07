const express=require('express')
const path=require("path")
const router=express.Router();
router.get('/about',(req,res,next)=>{
  
    res.sendFile(path.join(__dirname,"../views/products.html"))
})
router.get('/see',(req,res,next)=>{
    res.send("done")
})
router.post('/about',(req,res,next)=>{
  res.redirect('/see');
  console.log(req.body)

})
module.exports=router;