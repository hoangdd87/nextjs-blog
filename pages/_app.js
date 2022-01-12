import '../styles/global.css';
import { useState } from 'react';
import CartItemsContext from '../contexts/CartItemsContext';

export default function App({ Component, pageProps }) {
    const [productsSelected, setProductsSelected] = useState([]);
    const addNewProductItem = product => {
        setProductsSelected([...productsSelected, product]);
    }
    return (
      <CartItemsContext.Provider value = { { productsSelected, addNewProductItem } }>
        <Component {...pageProps} />
      </CartItemsContext.Provider>
    )
}
