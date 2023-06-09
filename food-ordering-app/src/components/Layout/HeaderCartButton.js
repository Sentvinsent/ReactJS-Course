import CartIcon from "../Cart/CartIcon";
import classes from "../Layout/HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [highlighted, setHighlighted] = useState(false);
    const { items } = cartCtx
    const numberOfCartItems = items.reduce((currentNumber, item) => { return currentNumber + item.amount }, 0);

    const btnClasses = `${classes.button} ${highlighted ? classes.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return
        }
        setHighlighted(true);

        const timer = setTimeout(() => {
            setHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>You cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton