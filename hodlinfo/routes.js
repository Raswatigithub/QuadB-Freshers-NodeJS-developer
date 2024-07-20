const express = require('express');
require('./Connection.js');
const router = express.Router();
const axios = require('axios');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
let Payment = require('./Payment.js');
let Ticker = require('./Ticker.js');

router.use(express.json());

router.get('/api/ticker',async(req,res)=>{
    try{
        const response=await fetch("https://api.wazirx.com/api/v2/tickers");
        const data=await response.json();
        const tenResult=data.slice(0,10);
        await tickerData.deleteMany({});
        await tickerData.insertMany(tenResult);
        res.json(tenResult);
    }
    catch(error){
        console.log("Error occured");
        res.status(500).send('An error occurred.');
    }
});
app.get('/api/data/',async(req,res)=>{
    try{
        const ticker=await tickerData.find({});
        res.json(ticker);
    }catch(error){
        console.log("Error occured..")
        res.status(500).send('An error occurred.');
    }
});
const app = express();


app.use(router);

app.listen(3000,()=>{
    console.log("Server listing on port 3000")
})
