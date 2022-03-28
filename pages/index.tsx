import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const img = (
    <Image src="/ship.jpg" width={2048} height="2018" alt="" quality={100} />
  )
  return (
    <div className={styles.container}>
      <div style={{ margin: '0' }}>{img}</div>
      <hr />
      <div style={{ margin: '0 10rem' }}>{img}</div>
      <hr />
      <div style={{ margin: '0 20rem' }}>{img}</div>
      <hr />
      <div style={{ margin: '0 30rem' }}>{img}</div>
    </div>
  )
}

export default Home
