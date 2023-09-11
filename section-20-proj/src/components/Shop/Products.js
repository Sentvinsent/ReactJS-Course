import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [{
  id: '111',
  title: 'Test 1',
  price: 6,
  description: 'This is a first product - amazing!',
},
{
  id: '222',
  title: 'Test 2',
  price: 5,
  description: 'This is a second product - amazing!',
}
]

const Products = (props) => {

  const mappedItems = products.map((item) => {
    return <ProductItem
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      description={item.description}
    />
  })

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {mappedItems}
      </ul>
    </section>
  );
};

export default Products;
