import React from "react";
import Image from "next/image";

import Button from "@/components/Button/Button";

import styles from "./page.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://www.dmarks.com.br/sistema/wp-content/uploads/2016/09/banner3.jpg"
          fill={true}
          alt=""
          className={styles.img}
        />
        {/* <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>teste</h1>
          <h2 className={styles.imgDesc}>testezinhoo</h2>
        </div> */}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>O que fazemos</h1>
          <p className={styles.desc}>
            Oferecemos o que há de melhor no segmento de Locação de Móveis para
            Feiras eventos. Situada em Curitiba, a D’marks tem atendido a
            eventos nos estados das regiões Sul, Sudesde e Centro-oeste. Com um
            vasto portifólio de eventos realizados, temos condições de atender
            hoje a qualquer tamanho de eventos. Conheça nossa listagem de
            produtos disponíveis ou entre em contato!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>A empresa</h1>
          <p className={styles.desc}>
            Foi fundada em 2002, na cidade de Curitiba/Pr, com o objetivo de
            atuar no segmento de locação de bens móveis, atendendo as montadoras
            de stands.
            <br />
            <br />
            A empresa trabalha com profissionais treinados, visando sempre a
            qualidade dos produtos e serviços prestados.
            <br />
            <br />
            Para manter esse compromisso, a D´marks Locações, possui um estoque
            amplo e variado e está sempre inovando com qualidade e bom gosto,
            acompanhando as tendências de mercado, proporcionando aos seus
            clientes e parceiros a rentabilidade esperada e a certeza de bons
            negócios.
          </p>
          <Button url="/contact" text="Contato"/>
        </div>
      </div>
    </div>
  );
};

export default About;
