import React, { useContext } from 'react';
import Layout from '../components/Layout/Layout';
import CartItemsContext from '../contexts/CartItemsContext';
import styles from '../styles/cart.module.css';
import Link from 'next/link';

const Cart = () => {
  const { productsSelected } = useContext(CartItemsContext);
  const getCartContent = () => (
    <>
      <h2>You selected:</h2>
      <ul>
        { productsSelected.map( product => (
          <li key={ product.cartItemId } className={ styles.productRow} >
            <span className={ styles.name }>{ product.name }</span>
            <span className={ styles.price }>{ product.price }</span>
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
      { productsSelected.length === 0 ? (<h2>Cart is empty</h2>) : getCartContent() }
      
    </Layout>
  );
};

Cart.propTypes = {};

export default Cart;
