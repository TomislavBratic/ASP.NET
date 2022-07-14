import { getAllDAta } from './controllers/products.js';
import express from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv';

const app=express();

dotenv.config();
const router=express.Router();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));


//create
router.post('/insert',(request,response)=>{
        console.log(request.body);
});

//read
router.get('/getAll',getAllDAta);

//update

//delete


app.listen(process.env.PORT,()=>console.log("app is running"));