import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./project.module.css"

export default ({ article }) => (
  <Link to={`/blog/${article.slug}`}>
    <div className={styles.projectPreview}>
      <img alt="" src={article.heroImage.fluid.src} />
      <div>{article.title}</div>
    </div>
  </Link>
  // <div className={styles.preview}>
  //   <img alt="" src={article.heroImage.fluid.src} />
  //   <h3 className={styles.previewTitle}>
  //   </h3>
  //   <small>{article.publishDate}</small>
  //   <div
  //     dangerouslySetInnerHTML={{
  //       __html: article.description.childMarkdownRemark.html,
  //     }}
  //   />
  //   {article.tags &&
  //     article.tags.map((tag) => (
  //       <p className={styles.tag} key={tag}>
  //         {tag}
  //       </p>
  //     ))}
  // </div>
)
