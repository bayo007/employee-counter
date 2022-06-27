import React, {useState} from 'react';
import {EmployeeService} from "../services/EmployeeService";
import {useDispatch , useSelector} from "react-redux";
import {updateSelected} from "../redux/features/employees.feature";

let EmployeesRedux = () => {
    let dispatch = useDispatch();

    // get the store data from redux
    let employeeState = useSelector((store) => { //it is fetched from the store through the rootreducer passed from the features
         return store["employees"] //get the reducer from the store(rootreducer)
    });

    
//or rather getAllEmployees if it was in this format below in the slice.js
//export const getAllEmployees = (state) => state.empoyees.empoyees;
//employees is contains the state which is the same as the emp.oyeee service
//it could be const employees = useSelector((state) => {state.employees.employees})

let {employees} = employeeState; //this is the second child node of the employeestate that is being called which is like the employeeServices
 //this employees here is the state just like the initial state of the employessService of line 5 in employeeFeatures..this employees is the state of all the employers we want to change
    let changeUpdateSelected = (empId) => {
        //dispatch an action
        dispatch(updateSelected(empId)) // empId is equivalent to the employeeId which becomes the payload
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">Employees</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ea, eos officia ratione reiciendis repellendus sapiente sit sunt voluptatem. A accusamus beatae consectetur cum inventore, magni quae! Deserunt, facilis, officiis?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group">
                            { 
                                employees.length > 0 &&
                                employees.map(employee => {
                                    return( // the checked class of teh input refers to the icon/button of teh input still remaining clicked because it is dependent on the employee.isSelected attribute so it still shows the clicked mark till it is actually clicked again to toggle its state as in the reducer function hence line 56 downward does not show
                                        <li key={employee.id} className="list-group-item">
                                            <input checked={employee.isSelected} onChange={() => changeUpdateSelected(employee.id)} type="checkbox" className="form-check-input me-2"/> 
                                            {employee.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-md-6">
                        {
                            employees.length > 0 &&
                            employees.map(employee => {
                                return(
                                    <div key={employee.id}>
                                        {
                                            employee.isSelected &&
                                            <div className="card my-2">
                                                <div className="card-body">
                                                    <ul className="list-group">
                                                        <li className="list-group-item">
                                                            Name : <span className="fw-bold">{employee.name}</span>
                                                        </li>
                                                        <li className="list-group-item">
                                                            Username: <span className="fw-bold">{employee.username}</span>
                                                        </li>
                                                        <li className="list-group-item">
                                                            Email : <span className="fw-bold">{employee.email}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default EmployeesRedux;
