const fs = require('fs');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//CORS 에러 처리
const cors = require('cors');
let corsOptions = {
  origin: "*", // 출처 허용 옵션
  Credential: true, // 사용자 인증이필요한 리소스(쿠키 등등) 접근
};
app.use(cors(corsOptions))


const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();



app.get('/api/customers', (req,res)=>{
    //클라이언트가 여기 접속하게 되면 클라이언트에게 데이터를 반환할 수 있게 해주기
    const sql = "SELECT * FROM management.customer"
    connection.query(sql, (err, rows, fields)=>{
      if (err)  console.log(err);
      res.send(rows);
    });
});

app.listen(port, ()=>{
    console.log(`listening port, ${port}`);
});

