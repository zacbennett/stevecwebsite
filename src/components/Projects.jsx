import React from "react"
import ArticlePreview from "./article-preview"
import styles from "./project.module.css"
function Projects({ projects }) {
  return (
    <div id={styles.projectContainer}>
      {/* <h2 className="section-headline">Recent Projects</h2> */}
      {/* <ul className="article-list"> */}
      {projects.map(({ node }) => {
        return <ArticlePreview key={node.slug} article={node} />
      })}
      {/* </ul> */}
    </div>
  )
}

export default Projects
