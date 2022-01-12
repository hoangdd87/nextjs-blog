import Layout from '../../components/Layout/Layout'


/*export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}*/

/*export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}*/

export default function Post() {
    return (
        <Layout>
            Post
        </Layout>
    )
}
