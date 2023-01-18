const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/hello',(req,res)=>{
    res.send('hi');
})

app.listen(port, ()=>{
    console.log(`listening port, ${port}`);
})