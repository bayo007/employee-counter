import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
    reducer : rootReducer //rootreducer is the reducer being called here
});
export default store;


/*could hae been.........

const store = configureStore({
    reducer {
        counter: counterReducer,
        employees: employeesReducer,
        users: userListReducer

    }
});
export default store;



*/