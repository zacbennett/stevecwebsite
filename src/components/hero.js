import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.heroDetails}>
    <div className={styles.heroInfo}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
    <div className={styles.hero}>
      <img alt={data.name} src={data.heroImage.fluid.src} />
    </div>
  </div>
)
