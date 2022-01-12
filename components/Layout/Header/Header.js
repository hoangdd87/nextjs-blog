import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = ({ className }) => {
  return (
      <header className={ className }>
        <nav className = { styles.nav  }>
          <Link href={ "/" }>
            <a className={ styles.link }>Home</a>
          </Link>
          <Link href={ "/products" }>
            <a className={ styles.link }>Products List</a>
          </Link>
          <Link href={ "/cart" }>
            <a className={ styles.link }>Cart</a>
          </Link>
          
        </nav>
      </header>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
