import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.section``

export const LayoutMain = styled.main`
  background: #fff;
  min-height: 100vh;
  padding: 2rem 0 0 270px;
  position: relative;
  z-index: 1;
  ${media.lessThan('large')`
    padding: 68px 1rem;
  `}
`

export const LayoutMainContent = styled.div`
  padding: 0 2rem;
  max-width: 864px;
  margin: 0 auto;
  ${media.lessThan('large')`
    padding: 0;
  `}
`