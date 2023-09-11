import { toggleCartActions } from "./cart-toggle-slice";
import { cartHandlerActions } from "./cart-handler-slice";

const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const resp = await fetch('https://react-course-proj-e9722-default-rtdb.firebaseio.com/cart.json');
            if (!resp) {
                throw new Error("Falied cart data fetch!")
            }
            const data = await resp.json();
            return data;
        }

        try {
            const cartData = await fetchData();
            dispatch(cartHandlerActions.replace({
                items: cartData.items || [],
                totalItems: cartData.totalItems
            }));
        } catch (e) {
            dispatch(toggleCartActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!'
            }))
        }
    }
}

const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(toggleCartActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }))

        const sendRequest = async () => {
            const resp = await fetch('https://react-course-proj-e9722-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalItems: cart.totalItems
                })
            })

            if (!resp.ok) {
                throw new Error("Sending cart data failed")
            }
        }

        try {
            await sendRequest();
            dispatch(toggleCartActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!'
            }))
        } catch (e) {

            dispatch(toggleCartActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))
        }

    }
}

export { sendCartData, fetchCartData }