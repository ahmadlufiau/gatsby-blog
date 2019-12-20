import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import media from 'styled-media-query'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import PortfolioItem from '../components/PortfolioItem'

const PortfolioList = props => {
  const list = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Portfolio" />
      <Title>Portfolio</Title>
      <Paragraph>
        Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi,
        sou preto inteiris, inteiris. Paisis, filhis, espiritis santis.
        Interessantiss quisso pudia ce receita de bolis, mais bolis eu num
        gostis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.
      </Paragraph>

      {list.map(
        ({
          node: {
            frontmatter: { background, image, link, description, title },
            timeToRead,
            fields: { slug },
          },
        }) => (
          <PortfolioItem
            slug={slug}
            image={image}
            background={background}
            timeToRead={timeToRead}
            title={title}
            link={link}
            description={description}
          />
        )
      )}
    </Layout>
  )
}

const Title = styled.h1`
  color: #44475a;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
  margin-top: ${props => props.mt && '4rem'};
  ${media.lessThan('large')`
    font-size: 2rem;
    margin-bottom: 1rem;
  `}
`

const Paragraph = styled.p`
  color: #44475a;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
  margin: ${props => (props.m0 ? 0 : '1.6rem 0')};
  strong {
    font-weight: bold;
  }
  ${media.lessThan('large')`
    margin: ${props => (props.m0 ? 0 : '1rem 0')};
  `}
`

export const query = graphql`
  query {
    allMarkdownRemark(
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
`

export default PortfolioList