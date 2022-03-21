import express from 'express';
import {First,Second} from './api'

const routes = express.Router();

routes.get('/',(req,res) => {
    res.send('here is my Main Routes !')
});

routes.use('/First',First);
routes.use('/Second',Second);



export default routes;