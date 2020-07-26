import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import { Helmet } from "react-helmet"
import styles from "./blog.module.css"
import Layout from "../components/layout"
import ArticlePreview from "../components/article-preview"
import Header from "../components/header"
class AboutIndex extends React.Component {
  render() {
    const [author] = get(this, "props.data.allContentfulPerson.edges")
    const data = author.node
    const bio = data.shortBio.shortBio
    console.log(data)
    return (
      <Layout location={this.props.location}>
        <Header />
        {/* do the css */}
        <div id={styles.aboutContainer}>
          {/* two columsn */}
          <div id={styles.photoContainer}>
            <img alt={data.name} src={data.heroImage.fluid.src} />
            <div>
              {" "}
              <a href={data.linkedIn}>
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
              <a href={`mailto:${data.email}`}>
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div id={styles.textContainer}>
            <p>{bio}</p>
          </div>
        </div>
      </Layout>
      // <Layout location={this.props.location}>
      //   <div style={{ background: '#fff' }}>
      //     <Helmet title={siteTitle} />
      //     <div className={styles.hero}>Blog</div>
      //     <div className="wrapper">
      //       <h2 className="section-headline">Recent articles</h2>
      //       <ul className="article-list">
      //         {posts.map(({ node }) => {
      //           return (
      //             <li key={node.slug}>
      //               <ArticlePreview article={node} />
      //             </li>
      //           )
      //         })}
      //       </ul>
      //     </div>
      //   </div>
      // </Layout>
    )
  }
}

export default AboutIndex

export const pageQuery = graphql`
  query AboutQuery {
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          email
          linkedIn
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(maxWidth: 1180, maxHeight: 480) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
