import express from 'express';

const first = express.Router();

first.get('/',(req,res)=>{
    res.send('my first route');
})

export default first ;