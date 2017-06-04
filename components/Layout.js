import React from 'react'
import Head from 'next/head'

export default (props) => (
  <main>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <style>{`
        body {
          background: #000;
          font: 18px menlo;
          color: #fff;
        }
      `}</style>
    </Head>
    {props.children}
  </main>
)
