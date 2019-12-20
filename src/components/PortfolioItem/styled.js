import styled from 'styled-components'
import media from 'styled-media-query'
import { Link as GatsbyLink } from 'gatsby'

export const Wrapper = styled.section`
  margin: 4rem 0;
`

export const Link = styled(GatsbyLink)`
  background: #6272a4;
  border-radius: 6px;
  color: #f8f8f2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  padding: 0.75rem 1rem;
  text-decoration: none;
  text-align: center;
  width: 200px;
  :hover {
    opacity: 0.75;
  }
  ${media.lessThan('large')`
    padding: 0.75rem;
  `}
`

export const ExternalLink = styled.a`
  background: #ff5555;
  border-radius: 6px;
  color: #f8f8f2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  text-decoration: none;
  text-align: center;
  width: 200px;
  :hover {
    opacity: 0.75;
  }
  ${media.lessThan('large')`
    padding: 0.75rem;
  `}
`

export const Title = styled.h1`
  color: #44475a;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
  ${media.lessThan('large')`
    font-size: 1.75rem;
    margin-bottom: 1rem;
  `}
`

export const Description = styled.p`
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