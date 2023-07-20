import Image from 'next/image'

import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 dMarks. All rights reserved.</div>
      <div className={styles.social}>
           <Image src="/1.png" width={15} height={15} className={styles.icon} alt="dMarks facebook"/>
           <Image src="/2.png" width={15} height={15} className={styles.icon} alt="dMarks instagram"/>
      </div>
    </div>
  )
}

export default Footer