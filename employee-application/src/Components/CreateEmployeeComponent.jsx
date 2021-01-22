import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {

    constructor(props){
        super(props);

       this.state= {
            empName:'',
            empSal:'',
            empDep:''
        }
        this.changeEmpNameHandler=this.changeEmpNameHandler.bind(this);
        this.changeEmpSalHandler=this.changeEmpSalHandler.bind(this);
        this.changeEmpDepHandler=this.changeEmpDepHandler.bind(this);
        this.saveEmployee=this.saveEmployee.bind(this);
    }
    saveEmployee=(e)=>{
        e.preventDefault();
        let employee={empName:this.state.empName,empSal:this.state.empSal,empDep:this.state.empDep};
        console.log('employee =>' +JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push("/employees");
        });                                                                                             
    }

    changeEmpNameHandler=(event)=>{
        this.setState({empName: event.target.value})
    }
    changeEmpSalHandler=(event)=>{
        this.setState({empSal: event.target.value})
    }
    changeEmpDepHandler=(event)=>{
        this.setState({empDep: event.target.value})
    }
    cancel(){
        this.props.history.push("/employees");
    }
    render() {
        return (
            <div>
              <div className="container">
                  <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center"> Add Employee </h3>
                          <div className="card-body">
                              <form>
                                  <div className="font-group">
                                      <label>Full Name</label>
                                      <input placeholder="full name" name="empName" className="form-control"
                                      value={this.state.empName} onChange={this.changeEmpNameHandler}/>
                                  </div>
                                  <div className="font-group">
                                      <label>Salory</label>
                                      <input placeholder="salory" name="empSal" className="form-control"
                                      value={this.state.empSal} onChange={this.changeEmpSalHandler}/>
                                  </div>
                                  <div className="font-group">
                                      <label>Department</label>
                                      <input placeholder="department" name="empDep" className="form-control"
                                      value={this.state.empDep} onChange={this.changeEmpDepHandler}/>
                                  </div>
                                  <button className="btn btn-success" onClick={this.saveEmployee} style={{padding:"2px"}}>SAVE</button>
                                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{padding:"2px", marginLeft:"10px"}} >Cancel</button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;