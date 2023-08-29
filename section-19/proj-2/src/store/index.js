// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';

// const counterReducer = (state = initState, action) => {
//     if (action.type === "increment") {
//         return {
//             counter: state.counter + action.value,
//             showCounter: true
//         }
//     }
//     if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//             showCounter: true
//         }
//     }

//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state
// }

// const store = createStore(counterReducer);

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})
export default store;
