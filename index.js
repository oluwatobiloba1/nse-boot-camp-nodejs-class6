const express = require('express');
const fs =  require('node:fs');
const path = require('path');
// import { fileURLToPath } from 'url';
const userRouter = require('./router/route.js');
 require('./db/db.js');

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const PORT = 3000;
const app = express();

app.get('/about',(req,res)=>{
    res.status(201).json('this is the about route');
})

// To serve the index html page from the public dir
// app.use(express.static('public'));
//OR


app.get('/',(req,res)=>{
    const filePath = path.join(__dirname + '/public/index.html')
    console.log(filePath)
    const readStream = createReadStream(filePath,'utf8');
    res.setHeader('Content-type','text/html');

    readStream.pipe(res);
})


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/app', userRouter)



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})