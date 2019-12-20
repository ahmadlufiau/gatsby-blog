import React from 'react'
import * as S from './styled'
import PropTypes from 'prop-types'

const PortfolioItem = ({ slug, title, image, link, description }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <img src={image} alt="project" />
    <S.Description>{description}</S.Description>
    <S.Link to={'/portfolio/' + slug}>Detail</S.Link>
    <S.ExternalLink href={link} target="_blank" rel="noopener noreferrer">
      Demo
    </S.ExternalLink>
  </S.Wrapper>
)

PortfolioItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PortfolioItem