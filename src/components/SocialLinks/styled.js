import styled from 'styled-components'
import media from 'styled-media-query'

export const SocialLinksWrapper = styled.nav`
  margin: 0 auto 1.5rem;
  width: 100%;
  ${media.lessThan('large')`
    display: none;
  `}
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 200ms;
  &:hover {
    color: #ff79c6;
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 20px;
  height: 20px;
`