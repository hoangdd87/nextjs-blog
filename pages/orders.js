import React from 'react';
import axios from 'axios';
import useSWR from 'swr';
import Layout from '../components/Layout/Layout';
import styles from '../components/Layout/Header/Header.module.css';
import Link from 'next/link';

const fetcher = () => {
  return axios({
    method: 'GET',
    url: `/api/orders`
  }).then(res => res.data);
}

const Orders = () => {
  const { data: orders, error, isValidating } = useSWR(`/api/orders`, fetcher)
  if (isValidating) return <div>Loading</div>;
  if (error) return <div>Something went wrong { error } </div>;
  console.log('Data = ', orders);
  return (
    <Layout title="All orders">
      <h1>All orders</h1>
      <table style={ { width: '100%' } }>
        <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Products</th>
          <th>View detail</th>
        </tr>
        </thead>
        <tbody>
        { orders.map(({ orderId, orderInfo, products }) => (
          <tr key={ orderId }>
            <td>{ orderInfo.name }</td>
            <td>{ orderInfo.email }</td>
            <td>{ orderInfo.address }</td>
            <td>{ JSON.stringify(products) }</td>
            <td>
              <Link href={ `/orders/${orderId}` }>
                <a>View detail</a>
              </Link>
            </td>
          </tr>
        )) }
        </tbody>
      </table>
    </Layout>
  );
};

Orders.propTypes = {};

export default Orders;
