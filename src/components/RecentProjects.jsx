import React from 'react'
import PropTypes from 'prop-types'
import ArticlePreview from './article-preview'

function RecentProjects({ projects }) {
  return (
    <div className="wrapper">
      <h2 className="section-headline">Recent Projects</h2>
      <ul className="article-list">
        {projects.map(({ node }) => {
          return <ArticlePreview key={node.slug} article={node} />
        })}
      </ul>
    </div>
  )
}

export default RecentProjects
