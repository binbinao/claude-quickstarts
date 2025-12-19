"use client"

import Head from 'next/head'

export default function Favicon() {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ios.png" />
    </Head>
  )
}