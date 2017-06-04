import React from 'react'
import Head from 'next/head'
import stylesheet from '../styles/index.sass'

export default (props) => (
  <main>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    {props.children}
  </main>
)
