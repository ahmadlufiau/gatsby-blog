import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'

const Recommendations = () => {
  const {
    eder,
    cris,
    tiba,
    galego,
    honjoya,
    ana,
    agnaldo,
    bruno,
    rusterson,
    wesley,
  } = useStaticQuery(
    graphql`
      query {
        aboutImage: file(relativePath: { eq: "honjoya.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 683) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        honjoya: file(relativePath: { eq: "honjoya.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        eder: file(relativePath: { eq: "honjoya.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cris: file(relativePath: { eq: "honjoya.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tiba: file(relativePath: { eq: "honjoya.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        galego: file(relativePath: { eq: "honjoya.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ana: file(relativePath: { eq: "honjoya.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        agnaldo: file(relativePath: { eq: "honjoya.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bruno: file(relativePath: { eq: "honjoya.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        rusterson: file(relativePath: { eq: "honjoya.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wesley: file(relativePath: { eq: "honjoya.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const recommendations = [
    {
      text:
        '"Lincon is an excellent professional, has skills that add a lot of value to the team, has a good technical and theoretical knowledge, always demonstrating the pros and cons of using any standard, language or framework."',
      name: 'José Henrique Honjoya',
      role: 'Software Development Coordinator',
      avatar: honjoya.childImageSharp.fluid,
    },
    {
      text:
        '"I had the honor of working with Lincon and I can say that you are a really competent professional. It has high technical knowledge and full mastery of the tools it uses. Always willing to help and share ideas with the team by adding technical values to the business level. An organized person, always up to date on technologies and likes qualified deliveries. A professional that I strongly recommend and thank you very much for the knowledge and exchange of experiences we had. Very grateful, Lincon. Success!"',
      name: 'Eder Munhoz dos Santos',
      role: 'Software Engineer',
      avatar: eder.childImageSharp.fluid,
    },
    {
      text:
        '"Lincon has a very important place in my career because it supported me and showed me the right way in my first steps in developing front end. Always very responsible and proactive the Lincon always excels in the duties passed to him, an excellent professional for sure! I have no doubt that it fits anywhere you work."',
      name: 'Bruno Ferreira',
      role: 'Software Developer',
      avatar: bruno.childImageSharp.fluid,
    },
    {
      text:
        '"Lincon is a professional of excellence, disciplined and focused on exceeding expectations. During the period we were involved in the same project, the professionalism, focus, and quality of Lincon\'s deliverables became visible. No doubt, he is a professional with great knowledge, technique and continuous search for evolution of his deliveries."',
      name: 'Cristiano Soares',
      role: 'Product Owner',
      avatar: cris.childImageSharp.fluid,
    },
    {
      text:
        '"Lincon is a high-level Front-end professional, always willing to share knowledge with colleagues and always innovating and studying new technologies in the market."',
      name: 'Wesley Silva',
      role: 'Product Owner',
      avatar: wesley.childImageSharp.fluid,
    },
    {
      text:
        '"Lincon is an excellent professional. Always attentive to new technologies and willing to learn and innovate. Its agility with technologies is impressive. We worked together at Yapay and I needed his help with javascript on some projects and always willing to help and with constructive and objective opinions. How much I learned from Lincon was of great professional value to me."',
      name: 'Ana Flávia de S. Nava Bagagi',
      role: 'Integration Analist',
      avatar: ana.childImageSharp.fluid,
    },
    {
      text:
        '"Extremely focused and organized professional! Lincon was directly responsible for my Front End development, teaching me much of what I know today about HTML / CSS. It is easy to find solutions to complex problems, which makes it an extremely competent and visionary professional. Thanks for the time we worked together, I learned too much."',
      name: 'Gustavo Galego',
      role: 'UI/UX Designer',
      avatar: galego.childImageSharp.fluid,
    },
    {
      text:
        '"Lincon is enthusiastic about web programming (development) in both the backend and frontend areas, where he is strong. An up-to-date person on the new tools in the market, besides being an excellent tutor, much of the knowledge I have today I owe him. I recommend it to those who seek an innovative and differentiated person for their business."',
      name: 'Rusterson Sato',
      role: 'Front-end Developer',
      avatar: rusterson.childImageSharp.fluid,
    },
    {
      text:
        '"Extremely dedicated and competent professional. He has a lot of experience and always shares his knowledge for everyone to evolve. Someone very inspiring."',
      name: 'Vitor Hideki Yamamoto Tiba',
      role: 'Software Developer',
      avatar: tiba.childImageSharp.fluid,
    },
    {
      text:
        '"A great professional, as well as a lot of technical knowledge is always ready to help and share their knowledge. It added a lot to my career and it was an honor to be able to work with him."',
      name: 'Agnaldo Burgo Junior',
      role: 'Fullstack Developer',
      avatar: agnaldo.childImageSharp.fluid,
    },
  ]

  return recommendations.map((recommendation, i) => (
    <S.Item key={i}>
      <S.Quote>{recommendation.text}</S.Quote>
      <S.Person>
        <S.Avatar>
          <S.Image fluid={recommendation.avatar} />
        </S.Avatar>
        <div>
          <S.Name>{recommendation.name}</S.Name>
          <S.Role>{recommendation.role}</S.Role>
        </div>
      </S.Person>
    </S.Item>
  ))
}

export default Recommendations