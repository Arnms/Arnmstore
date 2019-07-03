import React from 'react';
import Helmet from 'react-helmet';
import styles from './Layout.module.scss';

const Layout = ({ children, title, description }) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="ko" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link href="https://fonts.googleapis.com/css?family=Do+Hyeon|Nanum+Brush+Script|Nanum+Gothic|Nanum+Pen+Script|Noto+Sans+KR|Sunflower:300|Poor+Story" rel="stylesheet"></link>
    </Helmet>
    {children}
  </div>
);

export default Layout;
