import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            employees:[]
        }
        this.addEmployee=this.addEmployee.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
        this.deleteEmployee=this.deleteEmployee.bind(this);

    }
    viewEmployee(empId){
        this.props.history.push(`/view-employee/${empId}`)
    }
    deleteEmployee(empId){
        // this.props.history.push(`/delete-employee/${empId}`)
        EmployeeService.deleteEmployee(empId).then(res=>this.setState(
            {employees:this.state.employees.filter(employee=> employee.empId !== empId)}))
    }
    editEmployee(empId){
        this.props.history.push(`/update-employee/${empId}`);
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({ employees: res.data});
        });
    }
    addEmployee(){
        this.props.history.push("/add-employee");
    }

    render() {
        return (
            <div>
               <h2 className="text-center">Employee List</h2>
                <div className="row">
                   <button className="btn btn-primary" onClick={this.addEmployee} style={{marginBottom:"10px"}}> Add Employee</button>
                </div>
                <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Employee Salory</th>
                            <th>Employee Department</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee=>
                                <tr key={employee.empId}>
                                    <td>{ employee.empName}</td>
                                    <td>{ employee.empSal}</td>
                                    <td>{ employee.empDep}</td>
                                    <td>
                                        <button className="btn btn-info" onClick= {()=>this.editEmployee(employee.empId)}>Update</button>
                                        <button style={{marginLeft:"10px"}} className="btn btn-danger" onClick= {()=>this.deleteEmployee(employee.empId)}>Delete</button>
                                        <button style={{marginLeft:"10px"}} className="btn btn-info" onClick= {()=>this.viewEmployee(employee.empId)}>View</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default  ListEmployeeComponent
