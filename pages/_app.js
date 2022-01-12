import '../styles/global.css';
import { useRef, useState } from 'react';
import CartItemsContext from '../contexts/CartItemsContext';

export default function App({ Component, pageProps }) {
    const [productsSelected, setProductsSelected] = useState([]);
    const cartItemId = useRef(0);
    const addNewProductItem = product => {
        setProductsSelected([...productsSelected, { ... product, cartItemId: ++cartItemId.current }]);
    }
    return (
      <CartItemsContext.Provider value = { { productsSelected, addNewProductItem } }>
        <Component {...pageProps} />
      </CartItemsContext.Provider>
    )
}
