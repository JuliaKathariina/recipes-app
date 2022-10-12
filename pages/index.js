import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <>
    <Head><h1> Food-Shop</h1></Head>
    <div className={styles.container}>
      
      <a>A little Food-Shop</a>
    </div>
    </>
  )
}
