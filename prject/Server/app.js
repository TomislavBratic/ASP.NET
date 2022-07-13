const express=require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv');
const { urlencoded } = require('express');
dotenv.config();

const dbService=require("./dbService.js");

app.use(cors());
app.use(express.json());
app.use(urlencoded({extended : false}));


//create
app.post('/insert',(request,response)=>{

});

//read
app.get('/getAll',(request,response)=>{

    const db = dbService.getDbServiceInstance();
    const result = db.getAllData();
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})

//update

//delete


app.listen(process.env.PORT,()=>console.log("app is running"));