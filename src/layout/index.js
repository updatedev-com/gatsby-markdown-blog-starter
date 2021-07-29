import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Categories from '../components/Categories'
import config from '../../data/SiteConfig'
import * as styles from './index.module.scss'

const MainLayout = ({ children }) => (
  <>
    <Header />
    <Helmet>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    <div className={styles.bodyBox}>
      {children}
      <Categories activeClassName={styles.activeNav} />
    </div>
    <Footer />
  </>
)

export default MainLayout
