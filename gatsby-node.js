const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({ node, name: 'slug', value: slug.slice(12) })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      blog: allMarkdownRemark(
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
              image
            }
            timeToRead
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }

      portfolio: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { glob: "**/portfolio/*.md" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              description
              image
              title
              link
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.blog.edges
    const projects = result.data.portfolio.edges

    projects.forEach(({ node }) => {
      createPage({
        path: '/portfolio/' + node.fields.slug,
        component: path.resolve(`./src/templates/portfolio-post.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })

    Array.from({ length: projects.length }).forEach((_, index) => {
      createPage({
        path: '/portfolio/',
        component: path.resolve(`./src/templates/portfolio-list.js`),
      })
    })

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: '/blog/' + node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous,
        },
      })
    })

    Array.from({ length: posts.length }).forEach((_, index) => {
      createPage({
        path: '/blog/',
        component: path.resolve(`./src/templates/blog-list.js`),
        
      })
    })
  })
}