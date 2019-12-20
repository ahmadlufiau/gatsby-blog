import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const MenuLinksWrapper = styled.nav`
  text-align: left;
  width: 100%;
  ${media.lessThan('large')`
    background: #282a36;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: .5rem;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1rem;
  font-weight: 300;

  ${media.lessThan('large')`
    display: flex;
    justify-content: space-around;
  `}
`

export const MenuLinksItem = styled.li`
  margin-bottom: 1rem;

  ${media.lessThan('large')`
    margin-bottom: 0;
    width: 20%;
  `}

  .active {
    color: #ff5555;
  }
  svg {
    height: 1.5rem;
    margin-right: 0.75rem;

    ${media.lessThan('large')`
      margin-right: 0;
      margin-bottom: 3px;
    `}
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

  ${media.lessThan('large')`
    flex-direction: column;
    font-size: 0.75rem;
  `}
`