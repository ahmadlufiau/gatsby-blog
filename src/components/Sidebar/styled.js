import styled from 'styled-components'
import { Link } from 'gatsby'

export const SidebarWrapper = styled.aside`
  grid-area: sidebar;
  background: #282a36;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  padding: 2rem;
  text-align: center;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #282a36;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
  }
`

export const HireLink = styled(Link)`
  background: #6272a4;
  border-radius: 6px;
  color: #f8f8f2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  width: 100%;
  :hover {
    opacity: 0.75;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`