import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { JsSquare } from 'styled-icons/fa-brands/JsSquare'
import { Html5 } from 'styled-icons/fa-brands/Html5'
import { Css3Alt } from 'styled-icons/fa-brands/Css3Alt'
import { ReactLogo } from 'styled-icons/fa-brands/ReactLogo'
import { NodeJs } from 'styled-icons/fa-brands/NodeJs'
import { Npm } from 'styled-icons/fa-brands/Npm'

const AboutPage = () => {
  const {
    aboutImage,
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

  const testmonials = [
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

  return (
    <Layout>
      <SEO title="About" />
      <Title>About me</Title>
      <Paragraph>
        I’m a <strong>Software Developer</strong> specialized in{' '}
        <strong>Front-end</strong>, I have more than 6 years of experience
        building software for clients. Below is a quick overview of my history
        and my main technical skill sets and technologies I use.
      </Paragraph>
      <Image fluid={aboutImage.childImageSharp.fluid} />
      <Paragraph>
        For the past few years I've been able to work at{' '}
        <strong>Locaweb Group</strong> that is one of the biggest tech companies
        of Brazil, as a Front-end I could lead the Agency team at the E-commerce
        division (Tray), there I managed to solve problems like{' '}
        <strong>Web Performance</strong>, optimize the layouts for better
        ranking in the <strong>Search Engines</strong>, also think about the{' '}
        <strong>Responsive Design</strong> and develop new templates to optimze
        the delivery time.
      </Paragraph>
      <Paragraph>
        In my last job at Yapay's Engineer Team, I could start an{' '}
        <strong>Design System</strong> from scratch, my mission was to create
        the design guidelines for all the company's apps and define solid
        patterns for the <strong>Front-end architecture</strong>.
      </Paragraph>
      <LinksWrapper>
        <LinkPorf to="/portfolio">View Portfolio</LinkPorf>
        <LinkResume to="/resume">View Resume</LinkResume>
      </LinksWrapper>
      <Title mt>What I do</Title>
      <TechList>
        <TechItem>
          <IconJS />
          <IconTitle>Vanilla JavaScript</IconTitle>
          <Paragraph m0>
            This is my{' '}
            <span role="img" aria-label="loved">
              💛
            </span>{' '}
            language, the one that I study most and have more domain, it's so
            powerful that we can build everything with it. I know all the new
            features from ES6 version and ahead, also I know how to apply the
            Object Oriented Programming and Functional Programming.
          </Paragraph>
        </TechItem>

        <TechItem>
          <IconHTML />
          <IconCSS />
          <IconTitle>HTML5 & CSS3</IconTitle>
          <Paragraph m0>
            These two languages are the pilars of web and I have solid knowledge
            about it, it's where everything starts, are the solid base from what
            we can see and feel in the web. These two guys make possible to
            structure big systems and frameworks like Bootstrap, Materialize,
            Tailwind, etc..
          </Paragraph>
        </TechItem>
        <TechItem>
          <IconReact />
          <IconTitle>ReactJS</IconTitle>
          <Paragraph m0>
            React is the reactive framework that I have domain, I love to work
            with React and it's ecosystem, in my projects I already used Redux,
            Storybook, PropTypes, Styled-Components, Material-UI and many other
            tools. React have a vibrant community and I'm proud to part of it.
          </Paragraph>
        </TechItem>
        <TechItem>
          <IconNode />
          <IconTitle>NodeJS</IconTitle>
          <Paragraph m0>
            On the server-side I love to keep the JavaScript active, so I
            decided to learn NodeJS to follow the Omni Stack. With Node I used
            Express and MongoDB to create REST APIs where I hosted on Heroku. I
            can deal with problems like image upload, sending emails and
            authentication.
          </Paragraph>
        </TechItem>
        <TechItem>
          <svg
            width="48"
            height="48"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 283"
          >
            <path
              d="M239.973 139.203c0-14.534-11.782-26.316-26.316-26.316-.935 0-1.857.05-2.766.145L247.036 6.427H93.432l36.094 106.513a26.437 26.437 0 00-1.6-.053c-14.533 0-26.315 11.782-26.315 26.316 0 11.748 7.699 21.694 18.326 25.078-5.613 9.722-12.675 18.478-20.693 26.042-10.903 10.286-23.381 18.085-36.876 22.891-16.068-8.254-23.656-26.612-16.81-42.707.774-1.817 1.563-3.66 2.318-5.494 11.64-2.717 20.314-13.153 20.314-25.621 0-14.534-11.782-26.316-26.316-26.316-14.535 0-26.317 11.782-26.317 26.316 0 8.913 4.435 16.784 11.213 21.545-6.514 14.831-16.088 30.351-19.071 48.339-3.575 21.559-.011 44.443 18.634 57.366 43.424 30.096 90.56-18.657 140.259-30.913 18.01-4.442 37.782-3.726 53.65-12.917 11.918-6.902 19.774-18.34 22.004-31.182 2.202-12.686-1.01-25.317-8.393-35.559a26.207 26.207 0 006.12-16.868zm-85.732.093l.003-.093c0-9.544-5.082-17.902-12.686-22.515l28.728-58.091 28.778 58.707c-7.067 4.718-11.724 12.764-11.724 21.899 0 .192.01.381.015.572l-33.114-.479z"
              fill="#C63D14"
            />
            <path
              d="M246.399 139.203c0-15.985-11.517-29.323-26.688-32.172L256 0H84.466l36.344 107.248c-14.643 3.259-25.627 16.345-25.627 31.955 0 11.723 6.195 22.02 15.48 27.806-4.466 6.653-9.762 12.914-15.831 18.639-9.624 9.08-20.347 15.966-31.907 20.496-11.643-7.314-16.565-21.106-11.453-33.122l.4-.94.751-1.768c12.788-4.459 21.993-16.632 21.993-30.922 0-18.055-14.689-32.743-32.744-32.743S9.129 121.337 9.129 139.392c0 9.113 3.745 17.365 9.773 23.307a551.638 551.638 0 01-3.423 7.124C9.967 181.144 3.72 193.976 1.357 208.225c-4.693 28.299 2.876 50.921 21.313 63.699 11.188 7.754 22.549 10.804 33.982 10.803 21.529-.001 43.306-10.816 64.606-21.396 15.341-7.619 31.203-15.498 46.872-19.362 5.83-1.438 11.829-2.303 18.18-3.219 12.594-1.817 25.618-3.695 37.154-10.376 13.371-7.745 22.525-20.737 25.113-35.644 2.222-12.797-.453-25.613-6.975-36.483a32.544 32.544 0 004.797-17.044zm-12.854 0c0 10.967-8.922 19.89-19.89 19.89-10.966 0-19.889-8.923-19.889-19.89s8.923-19.889 19.889-19.889c10.968 0 19.89 8.922 19.89 19.889zm4.524-126.349l-32.045 94.513a32.348 32.348 0 00-4.058 1.258L170.31 44.047l-31.748 64.196a32.34 32.34 0 00-4.232-1.15l-31.935-94.239h135.674zm-110.143 106.46c10.967 0 19.889 8.922 19.889 19.889 0 10.967-8.922 19.89-19.889 19.89-10.966 0-19.889-8.923-19.889-19.89s8.923-19.889 19.889-19.889zm-86.054.189c10.968 0 19.89 8.922 19.89 19.889 0 10.967-8.922 19.89-19.89 19.89-10.966 0-19.889-8.923-19.889-19.89s8.923-19.889 19.889-19.889zm194.04 71.028c-1.935 11.148-8.821 20.887-18.891 26.719-9.387 5.437-20.636 7.06-32.546 8.777-6.38.92-12.978 1.872-19.423 3.462-17.042 4.202-33.549 12.401-49.512 20.33-31.945 15.867-59.534 29.569-85.547 11.54-19.055-13.206-18.175-37.641-15.955-51.031 2.057-12.405 7.619-23.83 12.998-34.879a748.863 748.863 0 002.722-5.646 32.459 32.459 0 008.462 2.124c-5.475 18.071 3.136 37.719 21.209 47.004l2.473 1.271 2.62-.933c14.288-5.088 27.453-13.254 39.131-24.271 7.549-7.121 14.036-15 19.37-23.419a32.9 32.9 0 004.903.368c18.055 0 32.744-14.688 32.744-32.744 0-9.71-4.253-18.442-10.989-24.444l20.578-41.612 20.787 42.405c-6.237 5.966-10.134 14.359-10.134 23.651 0 18.056 14.688 32.744 32.743 32.744a32.549 32.549 0 0018.672-5.868c3.68 7.533 5.051 16.009 3.585 24.452z"
              fill="#FFF"
            />
          </svg>
          <IconTitle>Jest & Testing Library</IconTitle>
          <Paragraph m0>
            I love to sleep at night, so to do that I test my apps using Jest as
            a test runner and react-testing-library as my testing library, so
            after I started to test I became more confident about the software I
            was delivering, also it reflect on the quality of the software.
          </Paragraph>
        </TechItem>
        <TechItem>
          <IconNpm />
          <IconTitle>Tooling</IconTitle>
          <Paragraph m0>
            I manage to use a lot of tools on my day, but tools like NPM
            Scripts, Sass, Webpack, ESLint, Prettier, EditorConfig, Git,
            Markdown, Terminal and many others, are essential for a good web
            developer and I can say that I have domain over all these tools.
          </Paragraph>
        </TechItem>
      </TechList>
      <Title mt>Recommendations</Title>
      {testmonials.map(testmonial => (
        <Recommendation>
          <RecommendationQuote>{testmonial.text}</RecommendationQuote>
          <RecommendationPerson>
            <RecommendationAvatar>
              <Image fluid={testmonial.avatar} />
            </RecommendationAvatar>
            <div>
              <RecommendationName>{testmonial.name}</RecommendationName>
              <RecommendationRole>{testmonial.role}</RecommendationRole>
            </div>
          </RecommendationPerson>
        </Recommendation>
      ))}
    </Layout>
  )
}
const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
`
const TechItem = styled.li`
  padding: 1rem;
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`
const Title = styled.h1`
  color: #44475a;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
  margin-top: ${props => props.mt && '4rem'};
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
`
const Image = styled(Img)`
  margin: 0 auto 1rem;
`
const LinksWrapper = styled.div`
  display: flex;
  margin-top: 2.5rem;
`
const LinkPorf = styled(Link)`
  background: #6272a4;
  border-radius: 6px;
  color: #f8f8f2;
  display: block;
  margin-right: 1rem;
  padding: 0.75rem 1rem;
  text-decoration: none;
  text-align: center;
  width: 200px;
  :hover {
    opacity: 0.75;
  }
`
const LinkResume = styled(Link)`
  background: #ff5555;
  border-radius: 6px;
  color: #f8f8f2;
  display: block;
  padding: 0.75rem 1rem;
  text-decoration: none;
  text-align: center;
  width: 200px;
  :hover {
    opacity: 0.75;
  }
`
const IconJS = styled(JsSquare)`
  color: #f1de4f;
  width: 3rem;
  height: 3rem;
`
const IconHTML = styled(Html5)`
  color: #de6e3c;
  width: 3rem;
  height: 3rem;
`
const IconCSS = styled(Css3Alt)`
  color: #53a7dc;
  width: 3rem;
  height: 3rem;
`
const IconReact = styled(ReactLogo)`
  color: #61dafb;
  width: 3rem;
  height: 3rem;
`
const IconNode = styled(NodeJs)`
  color: #026e00;
  width: 3rem;
  height: 3rem;
`
const IconNpm = styled(Npm)`
  color: #bb443e;
  width: 3rem;
  height: 3rem;
`
const IconTitle = styled.h3`
  color: #44475a;
  margin: 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.2;
`
const Recommendation = styled.section`
  padding: 2rem;
  background: rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
`
const RecommendationAvatar = styled.figure`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 1rem;
  overflow: hidden;
  flex-shrink: 0;
`
const RecommendationPerson = styled.div`
  display: flex;
  align-items: center;
`
const RecommendationRole = styled.p`
  color: #44475a;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
const RecommendationName = styled.p`
  color: #44475a;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.2;
`
const RecommendationQuote = styled.p`
  color: #44475a;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
  margin: 0 0 1.6rem;
  font-style: italic;
`
export default AboutPage