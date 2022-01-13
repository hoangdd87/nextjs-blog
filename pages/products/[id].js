import Layout from '../../components/Layout/Layout'
import { getAllProducts } from '../../lib/productsDataBaseHelpers';
import { useContext } from 'react';
import CartItemsContext from '../../contexts/CartItemsContext';
import PropTypes from 'prop-types';

export async function getStaticPaths() {
  try {
    const allProducts = await getAllProducts();
    const paths = allProducts.map(product => ({
      params: { id: product.productId }
    }));
    
    return {
      paths,
      fallback: false
    }
  } catch (err) {
    throw new Error('Error when fetching products path')
  }
}

export async function getStaticProps({ params: { id } }) {
  try {
    const allProducts = await getAllProducts();
    const productFound = allProducts.find(product => product.productId === id);
    return {
      props: {
        product: productFound
      }
    }
  } catch (err) {
    throw new Error('Error when fetching products path');
  }
}

export default function Product({ product }) {
  console.log('Product = ', product);
  const { addNewProductItem } = useContext(CartItemsContext);
  return (
    <Layout title={ `${ product.name }` }>
      <h1>Product detail</h1>
      <p>ID: { product.productId }</p>
      <p>Name: { product.name }</p>
      <p>Price: { product.price }</p>
      <button onClick={ () => addNewProductItem(product) } style={ { display: 'block' } }>Add to cart</button>
    </Layout>
  )
}
Product.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }).isRequired
}
