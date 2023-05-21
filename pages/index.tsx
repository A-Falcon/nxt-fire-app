import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Loader from '../components/Loader'
import toast from 'react-hot-toast'

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {/* <Loader show/> */}
      <button onClick={() => toast.success('hello toast!')}>
        Toast
      </button>
    </div>
  )
}