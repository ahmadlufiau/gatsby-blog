import styled from 'styled-components'
import { Link } from 'gatsby'

export const ProfileWrapper = styled.section`
  color: #8899a6;
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(Link)`
  color: #f8f8f2;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #ff5555;
  }
`

export const ProfileAuthor = styled.h1`
  color: #f8f8f2;
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0;
`

export const ProfilePosition = styled.small`
  color: #f8f8f2;
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
`

export const ProfileDescription = styled.p`
  color: #f8f8f2;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 1.5rem;
`