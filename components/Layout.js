import React from 'react';
import Head from 'next/head';

export const Layout = props => (
  <div>
    <Head>
    <link href="https://fonts.googleapis.com/css?family=Raleway:200,400,500" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
      />
      <link rel="stylesheet" href="/static/css/base.css"/>
    </Head>
    <main {...props} />
  </div>
);

export default Layout;