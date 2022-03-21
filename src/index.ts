import express from 'express';
import routes from './routes'
const app = express();

const port =3000;

// for Route 

// app.get('/api',(req,res) => {
//     res.send('server working fine !')
// });
app.use('/', routes);

// routes(app);

// using express in server
app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`);
    
})