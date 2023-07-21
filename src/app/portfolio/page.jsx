import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.container}> 
      <h1 className={styles.selectTitle}>Selecione</h1>
      <div className={styles.items}>
        <Link href="/portfolio/portfolio" className={styles.item}>
          <span className={styles.title}>Portfolio</span>
        </Link>
        
        <Link href="/portfolio/produtos" className={styles.item}>
          <span className={styles.title}>Produtos</span>
        </Link>

        <Link href="/portfolio/diferencial" className={styles.item}>
          <span className={styles.title}>Diferencial</span>
        </Link>

      </div>
    </div>
  )
}

export default Portfolio