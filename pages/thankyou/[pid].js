import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';

const Thankyou = () => {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <Layout title="Thank you page">
      <h1>Thank you</h1>
      <p>
        You can see your detail order &nbsp;
        <Link href={ `/orders/${pid}` }>
          <a>here</a>
        </Link>
      </p>
    </Layout>
  );
};

Thankyou.propTypes = {

};

export default Thankyou;
