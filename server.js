var express = require("express");

const app=express();
const data={
    products:[{
        _id:1,
        name:'sq',
        image:'css/images/laptop.gif',
        price :'8'
    },{
        _id:2,
        name:'sq',
        image:'css/images/laptop.gif',
        price :'44'
    },{
        _id:3,
        name:'sq',
        image:'css/images/laptop.gif',
        price :'66'
    }]
};
app.get("/api/products",(req,res)=>{
res.send(data.products);
});

app.listen(5000,()=>console.log("server started at localhost:5000"))