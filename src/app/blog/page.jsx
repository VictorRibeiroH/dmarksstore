import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>

      {/* Blog id */}
        <Link href="/blog/testId" className={styles.container}> 
          <div className={styles.imageContainer}>
            <Image 
              src="https://www.dmarks.com.br/sistema/wp-content/uploads/2017/10/ptf71.jpg"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>titulo</h1>
            <p className={styles.desc}>desc</p>
          </div>
        </Link>
      {/* Blog id */}
        <Link href="/blog/testId" className={styles.container}> 
          <div className={styles.imageContainer}>
            <Image 
              src="https://www.dmarks.com.br/sistema/wp-content/uploads/2017/10/ptf71.jpg"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>titulo</h1>
            <p className={styles.desc}>desc</p>
          </div>
        </Link>
      {/* Blog id */}
      <Link href="/blog/testId" className={styles.container}> 
          <div className={styles.imageContainer}>
            <Image 
              src="https://www.dmarks.com.br/sistema/wp-content/uploads/2017/10/ptf71.jpg"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>titulo</h1>
            <p className={styles.desc}>desc</p>
          </div>
        </Link>
      {/* Blog id */}
    </div>
  )
}

export default Blog