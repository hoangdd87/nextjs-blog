import Layout from '../../components/Layout/Layout';
import { useRouter } from 'next/router';
import useSWR from 'swr'
import axios from 'axios';

const fetcher = (pid) => () => {
  if(pid) {
    return axios({
      method: 'GET',
      url: `/api/orders/${ pid }`
    }).then(res => res.data);
  }
}

export default function OrderDetail() {
  const router = useRouter();
  const { pid } = router.query;
  const { data, error, isValidating } = useSWR(`/api/orders/${pid}`, fetcher(pid))
  if(isValidating) return <div>Loading</div>;
  if(error) return <div>Something went wrong {error} </div>
  return (
    <Layout>
      <h1>Order detail</h1>
      <p>{ JSON.stringify(data) }</p>
    </Layout>
  )
}
OrderDetail.propTypes = {}

