import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empId:this.props.match.params.empId,
            employee:{}
        }
    }
    componentDidMount(){
        EmployeeService.geEmployeeById(this.state.empId).then(res => {
            this.setState({employee : res.data});
        });
    }
    render() {
        return (
            <div>
               
               <div className="card col-md-6 offset-md-3">
                 <h3 className="text-center">View Employee Details</h3> 
               <br></br>
                <div className="row">
                 <label style={{color:"red"}}>Employee Name : </label>
                 <div>{this.state.employee.empName}</div>
               </div>
               <div className="row">
                <label style={{color:"red"}}>Employee Salory : </label>
                <div>{this.state.employee.empSal}</div>
               </div>
               <div className="row">
                <label style={{color:"red"}}> Employee Depart : </label>
                <div>{this.state.employee.empDep}</div>
               </div>
               </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;