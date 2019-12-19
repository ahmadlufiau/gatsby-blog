import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const MenuLinksWrapper = styled.nav`
  text-align: left;
  width: 100%;
  ${media.lessThan('large')`
    display: none;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  margin-bottom: 1rem;
  .active {
    color: #ff5555;
  }
  svg {
    height: 1.5rem;
    margin-right: 0.75rem;
  }
`

export const MenuLinksLink = styled(Link)`
  border-radius: 2rem;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: color 200ms;
  &:hover {
    color: #ff5555;
  }
`