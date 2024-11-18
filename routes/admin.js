const express=require('express')
const router=express.Router();
router.get('/addproduct',(req,res,next)=>{
    console.log("in the middleware")
    res.send('<form action="/admin/addproduct" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Addbutton</button></form>')
    
})
router.post('/addproduct',(req,res,next)=>{
console.log(req.body)
res.redirect('/');

})
module.exports=router;
