import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  color: #1fa1f2;
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  &.previous {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: '\\2190';
    margin-right: 0.5rem;
  }
  &.next:after {
    content: '\\2192';
    margin-left: 0.5rem;
  }
  ${media.lessThan('large')`
    padding: 1rem;
  `}
`