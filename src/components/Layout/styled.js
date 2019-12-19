import styled from 'styled-components'

export const LayoutWrapper = styled.section`
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-template-areas: 'sidebar main';
  overflow: hidden;
  height: 100vh;
`

export const LayoutMain = styled.main`
  grid-area: main;
  background: #fff;
  min-height: 100vh;
  padding: 2rem 0;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
  }
`

export const LayoutMainContent = styled.div`
  padding: 0 2rem;
  max-width: 864px;
  margin: 0 auto;
`