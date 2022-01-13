import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import Link from 'next/link';
import CartItemsContext from '../../../contexts/CartItemsContext';
import { useContext } from 'react';

const Header = ({ className }) => {
  const { currentCart } = useContext(CartItemsContext);
  return (
    <header className={ className }>
      <nav className={ styles.nav }>
        <Link href={ "/" }>
          <a className={ styles.link }>Home</a>
        </Link>
        <Link href={ "/products" }>
          <a className={ styles.link }>Products List</a>
        </Link>
        <Link href={ "/cart" }>
          <a className={ styles.link }>{ `Cart(${ currentCart.length })` }</a>
        </Link>
      </nav>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
