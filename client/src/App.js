//import logo from './logo.svg';
//import React, {Component} from 'react';
import { Component, useState, useEffect } from 'react';
import './App.css';
import Customer from './components/Customer';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

import {BrowserView, MobileView} from 'react-device-detect'


// const customers=[{
//   'id':1,
//   'image':'https://placeimg.com/64/64/any',// palceimg 웹 사이트는 랜덤이미지를 보여주는 사이트 64*64크기로 보여달라는 뜻
//   'name':'홍길동',
//   'birthday':'961222',
//   'gender':'man',
//   'job':'college student'
// },
// {
//   'id':2,
//   'image':'https://placeimg.com/64/64/3',
//   'name':'철수',
//   'birthday':'13535',
//   'gender':'man',
//   'job':'초등학생'
// },
// {
//   'id':3,
//   'image':'https://placeimg.com/64/64/2',
//   'name':'영희',
//   'birthday':'32567',
//   'gender':'여자',
//   'job':'직장인'
// },
// ];

class App extends Component{
  state = {
    customers:""
  }

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({customers:res}))
      .catch(err => console.log(err));
  }

  callApi = async () =>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render(){
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
              this.state.customers ? this.state.customers.map(c=>{
                //c는 그냥 int i같은 변수명인듯?
                return (<Customer
                  key={c.id} // map을 사용하면 key를 사용해 각 원소를 구별가능한 key를 설정해야한다. 무조건
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                  />
                );
              }) : ""
            }
          </TableBody>
        </Table>
      </Paper>
  
      //customer는 우리가 만든 class로 customer의 내용이 출력됨
      //위 예시 name~job까지가 여기서 바로 내용을 추가도가능하다. 이걸 props 프롭스라고 부름
      
      //고객이 많아져서 반복문 for문처럼 사용가능한게 "map"이다.
      //map안에도 return()안에 내용 넣기
    
    );
  }
  
}


// function App() {
//   return (
//     <Paper>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>번호</TableCell>
//             <TableCell>이미지</TableCell>
//             <TableCell>이름</TableCell>
//             <TableCell>생년월일</TableCell>
//             <TableCell>성별</TableCell>
//             <TableCell>직업</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//         {
//             customers.map(c=>{
//               //c는 그냥 int i같은 변수명인듯?
//               return (<Customer
//                 key={c.id} // map을 사용하면 key를 사용해 각 원소를 구별가능한 key를 설정해야한다. 무조건
//                 id={c.id}
//                 image={c.image}
//                 name={c.name}
//                 birthday={c.birthday}
//                 gender={c.gender}
//                 job={c.job}
//                 />
//               );
//             }) 
//           }
//         </TableBody>
//       </Table>
//     </Paper>

//     //customer는 우리가 만든 class로 customer의 내용이 출력됨
//     //위 예시 name~job까지가 여기서 바로 내용을 추가도가능하다. 이걸 props 프롭스라고 부름
    
//     //고객이 많아져서 반복문 for문처럼 사용가능한게 "map"이다.
//     //map안에도 return()안에 내용 넣기
  
//   );
// }

export default App;






// 이부분은 map사용하기 전 코드
// function App() {
//   return (
//     <div>
//       <Customer
//         id={customers[0].id}
//         image={customers[0].image}
//         name={customers[0].name}
//         birthday= {customers[0].birthday}
//         gender={customers[0].gender}
//         job={customers[0].job}
//       />
//       <Customer
//         id={customers[1].id}
//         image={customers[1].image}
//         name={customers[1].name}
//         birthday= {customers[1].birthday}
//         gender={customers[1].gender}
//         job={customers[1].job}
//       />
//       <Customer
//         id={customers[2].id}
//         image={customers[2].image}
//         name={customers[2].name}
//         birthday= {customers[2].birthday}
//         gender={customers[2].gender}
//         job={customers[2].job}
//       />      
//     </div>

//     //customer는 우리가 만든 class로 customer의 내용이 출력됨
//     //위 예시 name~job까지가 여기서 바로 내용을 추가도가능하다. 이걸 props 프롭스라고 부름
//   );
// }