import express from 'express'
import config from './db/config.js'
import Apiroutes from './Routes/routes.js';
import jwt from 'jsonwebtoken'

const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
Apiroutes(app);
//app.use(bodyParser.json());
//jwt middleware
app.use((req,res,next)=>{
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]==='JWT'){
        jwt.verify(req.headers.authorization.split(' ')[1],config.jwt_secret,(err,decode)=>{
            if(err)req.customer = undefined;
            req.customer = decode;
            next();
        });
    }else{
        req.customer = undefined;
        next();
    }
});

app.get('/',(req,res)=>{
    res.send("Hello welcome to my api");
})
// app.post('/',(req,res)=>{
//     res.send("This is post request");
// })
app.listen(config.port,()=>{
    console.log(`server is running at port ${config.port}`);

});