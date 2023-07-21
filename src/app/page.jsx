import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'

import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Locação de móveis em Curitiba.</h1>
        <p className={styles.desc}>A D’marks Oferece extensa linha de Móveis para Locação. Atendemos diversos segmentos na locação de Móveis para Feira e Eventos em Geral.</p>
        <Button url="/portfolio" text="Veja nosso trabalho"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img}/>
      </div>
    </div>
  )
}
