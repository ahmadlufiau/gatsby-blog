import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const ProfileWrapper = styled.section`
  color: #8899a6;
  display: flex;
  flex-direction: column;
  ${media.lessThan('large')`
    flex-direction: row;
    text-align: left;
  `}
`

export const ProfileLink = styled(Link)`
  color: #f8f8f2;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #ff5555;
  }
  ${media.lessThan('large')`
    display: flex;
    text-align: left;
  `}
`

export const ProfileAuthor = styled.h1`
  color: #f8f8f2;
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0;
  ${media.lessThan('large')`
    font-size: 1.2rem;
  `}
`

export const ProfilePosition = styled.small`
  color: #f8f8f2;
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  ${media.lessThan('large')`
    margin-bottom: 0;
    font-size: 0.875rem;
  `}
`

export const ProfileDescription = styled.p`
  color: #f8f8f2;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  ${media.lessThan('large')`
    display: none;
  `}
`