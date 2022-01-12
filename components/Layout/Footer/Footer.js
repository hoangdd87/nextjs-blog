import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ className }) => {
  return (
    <footer className={ className }>
      Footer
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
