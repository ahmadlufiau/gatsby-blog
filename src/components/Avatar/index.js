import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fixed(width: 160, height: 160) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar