import {EmployeeService} from "../../services/EmployeeService";
import {createSlice} from "@reduxjs/toolkit";

const initialState = { 
    employees : EmployeeService.getAllEmployees() //initial state is the normal object for all the employees
}

const employeeSlice = createSlice({
    name : 'employees',
    initialState : initialState,
    reducers : {
        updateSelected : function (state , action){ 
            state.employees = state.employees.map(employee => { //i.e the state of employees will be this new data
                if(employee.id === action.payload){
                    return {
                        ...employee,
                        isSelected : !employee.isSelected
                    }
                }
                else return employee;
            });
        }
    } //action.payload becomes the empId and updates the data of the particular employee
});
export const {updateSelected} = employeeSlice.actions;  // updateSelected is an action type
export default employeeSlice.reducer;
