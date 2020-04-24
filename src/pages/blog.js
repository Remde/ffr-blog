import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layoutblog from "../components/layoutBlog"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import Navbar from "../components/navbar"
import Footer from "../components/footer"



const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layoutblog location={location} title={siteTitle}>
      <SEO title="Blog" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article style={{
            boxShadow: `0px 3px 6px #0000001A`,
            borderRadius: 6,
            margin: `30px 30px 30px 30px`,
            padding: `30px 30px 10px 30px`,
            backgroundColor: `white`,
          }} key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(2 / 4),

                  color: `#747C81`
                }}
              >
                <Link style={{ boxShadow: `none`, color: `#747C81`, textDecoration:`none`,}} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small style={{color: `#747C81`}}>{node.frontmatter.date}</small>
            </header>
            <section>
              <p style={{color: `#747C81`}}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layoutblog>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
