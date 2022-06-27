import counterReducer from './features/counter.feature';
import employeeReducer from './features/employees.feature';

 
//root reducer contains all the reducers for state managements
const rootReducer = {
    counter : counterReducer,
    //counterReducer is an object that contains the initial state of the count and it is gotten from the slices
    /*  { counter:
        {count:0  ----------------and this is the initial state from the counter feature that hasnt been changed yet
        }
        this is how the redux function looks like on the console
    } */
    employees : employeeReducer

    /*
    users{
        loading,
        users,
        errormessage
    }
    */
}
export default rootReducer;
