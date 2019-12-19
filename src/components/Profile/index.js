import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../Avatar'
import SocialLinks from '../SocialLinks'
import * as S from './styled'

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <Avatar />
      <div>
        <S.ProfileAuthor>{title}</S.ProfileAuthor>
        <S.ProfilePosition>{position}</S.ProfilePosition>
      </div>
      <SocialLinks />
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile