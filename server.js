const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req,res)=>{
    //클라이언트가 여기 접속하게 되면 클라이언트에게 데이터를 반환할 수 있게 해주기
    res.send([{
        'id':1,
        'image':'https://placeimg.com/64/64/any',// palceimg 웹 사이트는 랜덤이미지를 보여주는 사이트 64*64크기로 보여달라는 뜻
        'name':'홍길동',
        'birthday':'961222',
        'gender':'man',
        'job':'college student'
      },
      {
        'id':2,
        'image':'https://placeimg.com/64/64/any',
        'name':'철수',
        'birthday':'13535',
        'gender':'man',
        'job':'초등학생'
      },
      {
        'id':3,
        'image':'https://placeimg.com/64/64/any',
        'name':'영희',
        'birthday':'32567',
        'gender':'여자',
        'job':'직장인'
      },
      ]);
})

app.listen(port, ()=>{
    console.log(`listening port, ${port}`);
})