import React from 'react'
import links from './content'
import * as S from './styled'
import Icons from './Icons'

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.icon]
        return (
          <S.MenuLinksItem key={i}>
            <S.MenuLinksLink
              to={link.url}
              partiallyActive={link.url === '/blog' && true}
              activeClassName="active"
            >
              <Icon />
              {link.label}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        )
      })}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
)

export default MenuLinks