import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {useRouter} from 'next/router';
import { ChangeName } from '../data/que_content';

export default function Home() {

  const r = useRouter();
  return (
    <div className={styles.container}>
      <input type='text' placeholder="Type your name here" 
      onChange={
        (e)=>ChangeName(e.target.value)
      }
      />
      <button onClick={
        ()=>r.push("/questions")
      }>Go to Question</button>
    </div>
  )
}
