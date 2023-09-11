import { createSlice } from "@reduxjs/toolkit";

const initToggle = {
    shown: false,
    notification: null
}

const toggleCartSlice = createSlice({
    name: 'Toggle Cart',
    initialState: initToggle,
    reducers: {
        toggle(state) {
            state.shown = !state.shown;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const toggleCartActions = toggleCartSlice.actions;
export default toggleCartSlice.reducer;