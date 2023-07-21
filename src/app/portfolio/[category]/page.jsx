import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button';
import Image from 'next/image';

const Category = ({params}) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {/* Portfolio img */}
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Desc</p>
            <Button text="Veja mais" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image 
              className={styles.img}
              fill={true}
              src="https://www.dmarks.com.br/sistema/wp-content/uploads/2017/10/ptf51.jpg" 
              alt=""
            />
          </div>
        </div>
      {/* Portfolio img */}
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Desc</p>
            <Button text="Veja mais" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image 
              className={styles.img}
              fill={true}
              src="https://www.dmarks.com.br/sistema/wp-content/uploads/2017/10/ptf51.jpg" 
              alt=""
            />
          </div>
        </div>
      {/* Portfolio img */}
    </div>
  )
}

export default Category