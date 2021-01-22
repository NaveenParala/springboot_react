import axios from 'axios';

const EMPLOYEE_API_BASE_URL="http://localhost:2019/api/v1/employees";
const BASE_URL1="http://localhost:2019/api/v1/modify";
class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee)
    }
    geEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL+ '/' + employeeId);
    }
    updateEmployee(employeeId,employee){
        return axios.put(BASE_URL1+'/'+employeeId ,employee);
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL+ '/' +employeeId);
    }
}

export default new EmployeeService();
