import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <br />
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            accusantium iure praesentium deserunt asperiores voluptatem sunt,
            omnis deleniti impedit, incidunt excepturi? Ea iste ad error ipsum
          </p>
          <div className={styles.author}>
            <Image
              src="https://www.dmarks.com.br/sistema/wp-content/uploads/2017/10/ptf6.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>dMarks</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://www.dmarks.com.br/sistema/wp-content/uploads/2017/10/ptf6.jpg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          voluptatem, harum porro ratione eius facere obcaecati eveniet neque
          labore dolor debitis non repellat voluptate eligendi accusamus et
          voluptas a. Eius? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          voluptatem, harum porro ratione eius facere obcaecati eveniet neque
          labore dolor debitis non repellat voluptate eligendi accusamus et
          voluptas a. Eius? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          voluptatem, harum porro ratione eius facere obcaecati eveniet neque
          labore dolor debitis non repellat voluptate eligendi accusamus et
          voluptas a. Eius? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          voluptatem, harum porro ratione eius facere obcaecati eveniet neque
          labore dolor debitis non repellat voluptate eligendi accusamus et
          voluptas a. Eius? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          voluptatem, harum porro ratione eius facere obcaecati eveniet neque
          labore dolor debitis non repellat voluptate eligendi accusamus et
          voluptas a. Eius? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
