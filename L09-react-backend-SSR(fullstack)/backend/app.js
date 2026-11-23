const express=require ('express');
const app=express();

const {products}=require('./data');
// console.log(products);

const cors = require('cors');
app.use(cors());

const PORT = 3000;



app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('hllo world');
})

app.get('/api',(req,res)=>{
    res.send('api is working');
})



app.get('/api/products',(req,res)=>{
    // res.json([
    //     {id:1,name:"Anushka"},
    //     {id:2,name:"Sapna"},
    //     {id:3,name:"Punima"}
    // ])

    res.send(products)
})


app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});