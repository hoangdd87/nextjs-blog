import React, { useContext, useState } from 'react';
import Layout from '../components/Layout/Layout';
import CartItemsContext from '../contexts/CartItemsContext';
import styles from '../styles/cart.module.css';
import axios from 'axios';
import { useRouter } from 'next/router'

const Checkout = () => {
  const { currentCart, resetCart } = useContext(CartItemsContext);
  const router = useRouter();
  const [values, setValues] = useState({
    name: 'Bill Gates',
    email: 'billGates@gmail.com',
    address: 'US'
  });
  
  const handleOnChange = evt => setValues({ ...values, [evt.target.name]: evt.target.value });
  
  const handleSubmit = evt => {
    evt.preventDefault();
    axios({
      url: '/api/orders',
      method: 'POST',
      data: {
        products: currentCart.map(cartItem => cartItem.product),
        orderInfo: values
      }
    }).then(({ data }) => {
      router.push(`/thankyou/${data.orderId}`);
      resetCart();
    })
  }
  
  if(currentCart.length ===0 ) return (
    <h1>Your cart is empty</h1>
  );
  
  return (
    <Layout title="Checkout">
      <h1>Checkout</h1>
      <p><strong>Your current selected products:</strong></p>
      <ul>
        { currentCart.map(cartItem => (
          <li key={ cartItem.cartItemId } className={ styles.productRow} >
            <span className={ styles.name }>{ cartItem.product.name }</span>
            <span className={ styles.price }>{ cartItem.product.price }</span>
          </li>
        ) ) }
      </ul>
      <form onSubmit={ handleSubmit } >
        <input
          style={ { display: 'block', margin: 25 }}
          placeholder="Name" name="name"
          value={ values.name }
          onChange={ handleOnChange }
        />
        <input
          style={ { display: 'block', margin: 25 }}
          placeholder="Email"
          name="email"
          value={ values.email }
          onChange={ handleOnChange }
        />
        <input
          style={ { display: 'block', margin: 25 }}
          type="text"
          placeholder="Address"
          name="address"
          value={ values.address }
          onChange={ handleOnChange }
        />
        <button type="submit">Order</button>
      </form>
    </Layout>
  );
};

Checkout.propTypes = {};

export default Checkout;
