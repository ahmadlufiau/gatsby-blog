import styled from 'styled-components'
import Img from 'gatsby-image'

export const Item = styled.section`
  padding: 2rem;
  background: rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
`

export const Avatar = styled.figure`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 1rem;
  overflow: hidden;
  flex-shrink: 0;
`

export const Person = styled.div`
  display: flex;
  align-items: center;
`

export const Role = styled.p`
  color: #44475a;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`

export const Name = styled.p`
  color: #44475a;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.2;
`

export const Quote = styled.p`
  color: #44475a;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
  margin: 0 0 1.6rem;
  font-style: italic;
`

export const Image = styled(Img)`
  margin: 0 auto 1rem;
`