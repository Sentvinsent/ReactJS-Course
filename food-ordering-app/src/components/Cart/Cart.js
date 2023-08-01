import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import React, { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
import useRequest from '../../hooks/use-request';

const Cart = (props) => {


    const cartCtx = useContext(CartContext);
    const [checkoutEnabled, setCheckoutEnabled] = useState(false);
    const { isLoading, hasFinished, sendRequest } = useRequest();

    const totalAmount = `$${+cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map((item) => {
        return <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)} />
    })}</ul>

    const orderHandler = () => {
        setCheckoutEnabled(true);
    }

    const submitOrderHandler = async (userData) => {
        await sendRequest({
            url: "https://react-course-proj-e9722-default-rtdb.firebaseio.com/orders.json",
            method: "POST",
            body: {
                user: userData,
                orderedItems: cartCtx.items
            }
        })
        cartCtx.clearCart();
    }

    const modalActions =
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
            {hasItems && <button className={classes.button} onClick={orderHandler}> Order</button>}
        </div>

    const isSubmittingModalContent = <p>Sending order data...</p>
    const didSubmitModalContent =
        <React.Fragment>
            <p>Order has been succesfully sent!</p>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
            </div>
        </React.Fragment>

    const cartModalContent =
        <React.Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            {checkoutEnabled ? <Checkout onCheckoutCancel={props.onCloseCart} onSubmit={submitOrderHandler} /> : modalActions}
        </React.Fragment>

    return <Modal onClose={props.onCloseCart}>
        {!isLoading && !hasFinished && cartModalContent}
        {isLoading && isSubmittingModalContent}
        {hasFinished && !isLoading && didSubmitModalContent}
    </Modal>
}

export default Cart;