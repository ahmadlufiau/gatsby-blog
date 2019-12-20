import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/seo'

const projects = [
  {
    title: 'Task Manager',
    tags: ['MongoDB', 'Express', 'React', 'NodeJS', 'REST API'],
    description:
      'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Paisis, filhis, espiritis santis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.',
  },
  {
    title: 'Chat App',
    tags: ['Socket.io', 'NodeJS', 'Mustache', 'Moment'],
    description:
      'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Paisis, filhis, espiritis santis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.',
  },
  {
    title: 'Gatsby Blog',
    tags: ['React', 'GatsbyJS', 'GraphQL', 'JAM Stack'],
    description:
      'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Paisis, filhis, espiritis santis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.',
  },
  {
    title: 'react-push-notification-button',
    tags: ['React', 'PWA', 'NPM'],
    description:
      'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Paisis, filhis, espiritis santis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.',
  },
  {
    title: 'Material Dashboard',
    tags: ['React', 'React Context', 'React Router', 'Material UI'],
    description:
      'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Paisis, filhis, espiritis santis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.',
  },
]

const PortfolioPage = () => {
  const { aboutImage } = useStaticQuery(
    graphql`
      query {
        aboutImage: file(relativePath: { eq: "about.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 683) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

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

      {projects.map(project => (
        <section key={project.title}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <Image fluid={aboutImage.childImageSharp.fluid} />
          {project.tags.map(tag => (
            <ProjectTag key={tag}>{tag}</ProjectTag>
          ))}
          <Paragraph>{project.description}</Paragraph>
        </section>
      ))}
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

const Image = styled(Img)`
  margin: 1rem auto;
`

const ProjectTitle = styled.h2`
  color: #44475a;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
  margin-top: 4rem;
  ${media.lessThan('large')`
    font-size: 1.75rem;
    margin-bottom: 1rem;
  `}
`

const ProjectTag = styled.span`
  background: #6272a4;
  border-radius: 6px;
  color: #f8f8f2;
  display: inline-block;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
  padding: 0.5rem 1rem;
`

export default PortfolioPage