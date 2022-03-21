import express from 'express';

const second = express.Router();

second.get('/',(req,res)=>{
    res.send('my second route !!!');
})

export default second ;