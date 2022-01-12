import Layout from '../components/Layout/Layout';
import PropTypes from 'prop-types';
import fs from 'fs';
import path from 'path';

const dataJsonFile = path.join(process.cwd(), 'database/products.json');

export async function getStaticProps() {
  return new Promise((resolve, reject) => {
    fs.readFile(dataJsonFile, 'utf8', function (err, data) {
      try {
        let products = [];
        if (err) {
          reject(new Error('Fetching products failed'))
        }
        products = JSON.parse(data);
        resolve({
          props: {
            products
          }
        });
      } catch (err) {
        reject(err)
      }
    });
  })
}

export default function Products({ products }) {
  console.log('Products = ', products);
  return (
    <Layout title="Products page">
      <h1>Products list</h1>
      <ul>
        { products.map(propduct => (
          <li key={ propduct.id }>
            ID: { propduct.id }. Name: { propduct.name } ---- Price: { propduct.price }
          </li>
        ))}
      </ul>
    </Layout>
  )
}

Products.propTypes = {
  products: PropTypes.array.isRequired
}


