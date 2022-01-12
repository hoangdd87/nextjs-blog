import Layout from '../components/Layout/Layout';
import PropTypes from 'prop-types';
import { getAllProducts } from '../lib/productsDataBaseHelpers';
import styles from '../components/Layout/Header/Header.module.css';
import Link from 'next/link';
import React from 'react';


export async function getStaticProps() {
  try {
    const products = await getAllProducts();
    return {
      props: {
        products
      }
    }
  } catch (err) {
    throw new Error('Fetching data failed');
  }
}

export default function Products({ products }) {
  console.log('Products = ', products);
  return (
    <Layout title="Products page">
      <h1>Products list</h1>
      <ul>
        { products.map(propduct => (
          <li key={ propduct.id }>
            ID: { propduct.id }. Name: { propduct.name } ---- Price: { propduct.price } ---
            <Link href={ `/products/${propduct.id}` }>
              <a className={ styles.link }>View</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

Products.propTypes = {
  products: PropTypes.array.isRequired
}


