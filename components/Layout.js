import React from 'react'
import Head from 'next/head'

export default (props) => (
  <main>
    <Head>
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
