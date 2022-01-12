import React, { useContext } from 'react';
import Layout from '../components/Layout/Layout';
import CartItemsContext from '../contexts/CartItemsContext';
import styles from '../styles/cart.module.css';

const Checkout = () => {
  const { productsSelected } = useContext(CartItemsContext);
  return (
    <Layout title="Checkout">
      <h1>Checkout</h1>
      <p><strong>Your current selected products:</strong></p>
      <ul>
        { productsSelected.map( product => (
          <li key={ product.cartItemId } className={ styles.productRow} >
            <span className={ styles.name }>{ product.name }</span>
            <span className={ styles.price }>{ product.price }</span>
          </li>
        ) ) }
      </ul>
      <form>
        checkout
      </form>
    </Layout>
  );
};

Checkout.propTypes = {};

export default Checkout;
