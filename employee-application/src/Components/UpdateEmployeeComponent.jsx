import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props);

       this.state= {
            empId: this.props.match.params.empId,
            empName:'',
            empSal:'',
            empDep:''
        }
        this.changeEmpNameHandler=this.changeEmpNameHandler.bind(this);
        this.changeEmpSalHandler=this.changeEmpSalHandler.bind(this);
        this.changeEmpDepHandler=this.changeEmpDepHandler.bind(this);
        this.updateEmployee=this.updateEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.geEmployeeById(this.state.empId).then((res) =>{
               let employee= res.data;
               this.setState({
                   empName:employee.empName,
                   empSal:employee.empSal,
                   empDep:employee.empDep
               });
        });
    }
    updateEmployee=(e)=>{
        e.preventDefault();
        let employee={empName:this.state.empName,empSal:this.state.empSal,empDep:this.state.empDep};
        console.log('employee =>' +JSON.stringify(employee)); 
        EmployeeService.updateEmployee(this.state.empId,employee).then(res=>{
            this.props.history.push('/employees');
        });                                                                            
    }

    changeEmpNameHandler=(event)=>{
        this.setState({empName: event.target.value});
    }
    changeEmpSalHandler=(event)=>{
        this.setState({empSal: event.target.value});
    }
    changeEmpDepHandler=(event)=>{
        this.setState({empDep: event.target.value});
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
                          <h3 className="text-center"> Update Employee </h3>
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
                                  <button className="btn btn-success" onClick={this.updateEmployee} style={{padding:"2px"}}>SAVE</button>
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

export default UpdateEmployeeComponent;