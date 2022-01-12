import Head from 'next/head'
import styles from './Layout.module.css'
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export const siteTitle = 'HoangDaoDuc Next.js Sample Website'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="og:title" content={ siteTitle }/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <div className = { styles.defaultLayout }>
        <Header className={ styles.header }/>
        <main className={ styles.main }>{ children }</main>
        <Footer className={ styles.footer }/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

Layout.defaultProps = {
  title: 'Default title'
}

export default Layout;
