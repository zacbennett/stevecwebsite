import React from 'react'
import PropTypes from 'prop-types'
import ArticlePreview from './article-preview'
import { graphql } from 'gatsby'

function Education() {
  const education = get(this, 'props.data.allContentfulEducation.edges')
  return (
    <div className="wrapper">
      <h2 className="section-headline">Education</h2>
      <ul className="article-list">
        {/* {projects.map(({ node }) => {
          return (
            <li key={node.slug}>
              <ArticlePreview article={node} />
            </li>
          )
        })} */}
      </ul>
    </div>
  )
}

export default Education

export const pageQuery = graphql`
  query EducationQuery {
    allContentfulEducation {
      edges {
        node {
          schoolName
          description
          degree
          date
          schoolLogo {
            file {
              url
            }
          }
        }
      }
    }
  }
`
