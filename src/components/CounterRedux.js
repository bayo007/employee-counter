import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment , decrement , incrementBy,DecrementBy } from "../redux/features/counter.feature";

let CounterRedux = () => {
    let dispatch = useDispatch(); //to dispatch actions from the reducers

//get data frim redux store
    let counterState = useSelector((state) => { //useSelector is used to get data from roootReducer
        return state["counter"]; //this fetches the initial state from the counterfeature count value which is 0
    });  //counter here is the name of the reducer


//USE SELECTOR HERE IS USED TO ACCESS THE STORE WHICH IS THE ROOTREDUCER AND ACCESS THE COUNTER REDUCER WHICH CONTAINS
//..WHICH CONTANIS THE STATE

/*Can also be useSelector((store)=>{ store.counter })

then {count} is destructured from it

----OR------

const count= useSelector((store)=>store.counter.count

----OR----

COSNT {count} = ........store.counter



*/





    let {count} = counterState; // it then destructures the value the counterstate to be the count which is 0 initially
//counter state is used to grab the reducer Counter of the root reducer and the count state is what needs to be updated so it is destructurede and being used
    let clickIncr = () => { //used in line 35
        dispatch(increment()); //dispatchint is iused to execute the action
    }; //it could be actions.increment if it was not destructured in the counterFeature

    let clickDecr = () => { //used in line 36
        dispatch(decrement()); // or action.decerement if it was not destructurde in the counterFeature
    };

    let clickIncrBy = () => { // used in line 37
        dispatch(incrementBy(5)); //5 here is the payload being dispatched
    };
    let clickDecrBy = () => { // used in line 37
        dispatch(DecrementBy(5)); //5 here is the payload being dispatched
    };
//the line at 35 means the line 14 which is the destructured count is being referred to or called
    return (
        <React.Fragment>
            <div className="container mt-8">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body"> 
                                <p className="h3 display-4">{count}</p> 
                                <button onClick={clickIncr} className="btn btn-success m-1">Increment</button> 
                                <button onClick={clickDecr} className="btn btn-warning m-1">Decrement</button>
                                <button onClick={clickIncrBy} className="btn btn-danger m-1">Increment by 5</button>
                                <button onClick={clickDecrBy} className="btn btn-danger m-1">Decrement by 5</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

//the data retains on the page even after navigation because the state of the variable hasnt changed from what it was previously set
export default CounterRedux;
