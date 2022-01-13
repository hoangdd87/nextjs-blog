import React, { useContext } from 'react';
import Layout from '../components/Layout/Layout';
import CartItemsContext from '../contexts/CartItemsContext';
import styles from '../styles/cart.module.css';
import Link from 'next/link';

const Cart = () => {
  const { currentCart } = useContext(CartItemsContext);
  const getCartContent = () => (
    <>
      <h2>You selected:</h2>
      <ul>
        { currentCart.map(cartItem => (
          <li key={ cartItem.cartItemId } className={ styles.productRow} >
            <span className={ styles.name }>{ cartItem.product.name }</span>
            <span className={ styles.price }>{ cartItem.product.price }</span>
          </li>
        ) ) }
      </ul>
      <Link href={ `/checkout` }>
        <a>Checkout</a>
      </Link>
    </>
  )
  return (
    <Layout title="Cart">
      <h1>Cart</h1>
      { currentCart.length === 0 ? (<h2>Cart is empty</h2>) : getCartContent() }
    </Layout>
  );
};

Cart.propTypes = {};

export default Cart;
