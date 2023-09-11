import { createSlice, current } from "@reduxjs/toolkit";

const initData = {
    items: [],
    totalItems: 0,
    cartChanged: false
}

const cartHandlerSlice = createSlice({
    name: 'Cart Handler',
    initialState: initData,
    reducers: {
        replace(state, action) {
            state.items = action.payload.items;
            state.totalItems = action.payload.totalItems;
        },
        add(state, action) {
            const existingCartItemIndex = current(state.items).findIndex(item => item.id === action.payload.id)
            const existingCartItem = current(state.items)[existingCartItemIndex];

            let updatedItems;

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1,
                    total: existingCartItem.total + existingCartItem.price
                }
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = updatedItem
                state.items = updatedItems
            } else {
                const newItem = {
                    ...action.payload,
                    total: action.payload.price
                }
                state.items.push(newItem)
            }
            state.totalItems++
            state.cartChanged = true
        },
        remove(state, action) {
            const existingCartItemIndex = current(state.items).findIndex(item => item.id === action.payload.id)
            const existingCartItem = current(state.items)[existingCartItemIndex];

            let updatedItems;

            if (existingCartItem.quantity > 1) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity - 1,
                    total: existingCartItem.total - existingCartItem.price
                }
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = updatedItem
                state.items = updatedItems
            } else {
                state.items.splice(existingCartItemIndex, 1)
            }
            state.totalItems--
            state.cartChanged = true
        }
    }
})

export const cartHandlerActions = cartHandlerSlice.actions;
export default cartHandlerSlice.reducer;