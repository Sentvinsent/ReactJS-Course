import { createSlice, configureStore } from '@reduxjs/toolkit';

const initCounterState = { counter: 0, showCounter: true }


const counterSlice = createSlice({
    name: 'counter',
    initialState: initCounterState,
    reducers: {
        increment(state, action) {
            state.counter = state.counter + action.payload
        },
        decrement(state) {
            state.counter--
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
})
export const counterActions = counterSlice.actions;
export default counterSlice.reducer