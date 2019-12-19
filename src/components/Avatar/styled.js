import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 10rem;
  margin: 0 auto 1rem;
  width: 10rem;

  ${media.lessThan('large')`
    width: 2.25rem;
    height: 2.25rem;
    margin-right: 1rem;
    margin-bottom: 0;
  `}
`