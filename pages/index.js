import Layout from '../components/Layout/Layout'
import Link from 'next/link';
import PropTypes from 'prop-types';

const Home = () => {
    return (
        <Layout title="Home page">
            <h1>Welcome to Home page</h1>
        </Layout>
    )
}

export async function getStaticProps() {
    return {
        props: {
            prop: {}
        }
    }
}

Home.propTypes = {
    /*allPostsData: PropTypes.array.isRequired*/
}

export default Home;
