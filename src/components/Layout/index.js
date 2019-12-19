import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../Sidebar'

import * as S from './styled'
import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <S.LayoutMain>
        <S.LayoutMainContent>{children}</S.LayoutMainContent>
      </S.LayoutMain>
      <Sidebar />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout