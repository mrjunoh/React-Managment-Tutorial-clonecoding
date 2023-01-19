import { TableCell, TableRow } from "@mui/material";
import React from "react";

//React.Component는 일종의 라이브러리이자 class임
//즉 React.Component를 상속받아서 class를 새롭게 만들었음
class Customer extends React.Component{
    //React.Component여기에 render()가 포함되어있어 
    //화면에 나올 내용이 render()안에 있다.
    //render()함수는 출력내용이 return()안에 있어야함
    render(){
        return(
            // <div>
            //     <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}></CustomerProfile>
            //     <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}></CustomerInfo>
            // </div>
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        )
    }

}

//고객의 정보가 많으면 component를 분리해서 관리하면됨
// class CustomerProfile extends React.Component{
//     render(){
//         return(
//             <div>
//                 <img src={this.props.image} alt="profile"/>
//                 <h2>{this.props.name}({this.props.id})</h2>
//             </div>
//         )
//     }
// }

// class CustomerInfo extends React.Component{
//     render(){
//         return(
//             <div>
//                 <p>{this.props.birthday}</p>
//                 <p>{this.props.gender}</p>
//                 <p>{this.props.job}</p>
//             </div>
//         )
//     }
// }

export default Customer;//내보내기 코드