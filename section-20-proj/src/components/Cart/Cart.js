import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {

  const cartItems = useSelector(state => state.handleCart.items);
  const mappedItems = cartItems.map((item) => {
    return <CartItem
      key={item.id} item={{ id: item.id, title: item.title, quantity: item.quantity, total: item.total, price: item.price }}
    />
  })

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.length > 0 ? mappedItems : <p>No items in the cart</p>}
      </ul>
    </Card>
  );
};

export default Cart;
