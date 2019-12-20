import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'

const BlogList = props => {
  const list = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" />
      {list.map(
        ({
          node: {
            frontmatter: { background, category, date, description, title },
            timeToRead,
            fields: { slug },
          },
        }) => (
          <PostItem
            slug={slug}
            background={background}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { glob: "**/blog/*.md" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(locale: "en-us", formatString: "MMM DD, YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList