import '../styles/global.css';
import { useRef, useState } from 'react';
import CartItemsContext from '../contexts/CartItemsContext';
import PropTypes from 'prop-types';

export default function App({ Component, pageProps }) {
    const [currentCart, setCurrentCart] = useState([]);
    const cartItemId = useRef(0);
    const addNewProductItem = product => {
        setCurrentCart([...currentCart, { product, cartItemId: ++cartItemId.current }]);
    }
    const resetCart = () => {
        setCurrentCart([]);
    }
    return (
      <CartItemsContext.Provider value = { { currentCart, addNewProductItem, resetCart } }>
        <Component {...pageProps} />
      </CartItemsContext.Provider>
    )
}
App.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object
}
