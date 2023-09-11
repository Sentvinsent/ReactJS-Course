import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { toggleCartActions } from '../../store/cart-toggle-slice';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const numberOfProd =  useSelector(state => state.handleCart.totalItems);

  const clickHandler = () => {
    dispatch(toggleCartActions.toggle())
  }

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfProd}</span>
    </button>
  );
};

export default CartButton;
