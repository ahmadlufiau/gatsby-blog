import React from 'react'
import Profile from '../Profile'
import MenuLinks from '../MenuLinks'
import { Send } from 'styled-icons/feather/Send'
import * as S from './styled'

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <MenuLinks />
    <S.HireLink to="/contact">
      <Send />
      Hire me
    </S.HireLink>
  </S.SidebarWrapper>
)

export default Sidebar