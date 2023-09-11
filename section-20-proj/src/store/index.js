import { configureStore } from '@reduxjs/toolkit';
import toggleCartReducer from './cart-toggle-slice';
import cartHandlerReducer from './cart-handler-slice';

const store = configureStore({
    reducer: {
        toggleCart: toggleCartReducer,
        handleCart: cartHandlerReducer
    }
})
export default store;