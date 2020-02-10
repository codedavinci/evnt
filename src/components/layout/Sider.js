import React from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import { NavLink as NL } from 'react-router-dom'

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0 60px 0 0;
`

const LogoWrapper = styled.div`
  height: 60px;
  border-radius: 0 60px 0 0;
`

const LinksWrapper = styled(animated.nav)`
  padding: 0; 
  height: calc(100% - 60px); 
  display: flex;
  flex-direction: column;
  list-style: none;
`


const Link = styled(NL)` 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding-left: 10px;
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: -0.06em;
  text-decoration: none;
  transition: all 0.25s ease;
  &.active {
   color:${({ theme }) => theme.colors.primary};
   background-color: white;
   border-radius: 80px 0 0 80px;
 }
 &:hover {
  color: ${({ theme, isActive }) => isActive && theme.colors.white};

 }
`


const Icon = styled.i`
  flex: 1; 
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
`

const Label = styled.span`
 flex: 4;
`


const links = [
  { label: 'dashboard', icon: 'fas fa-home' },
  { label: 'profile', icon: 'far fa-user' },
  { label: 'settings', icon: 'fas fa-cog' },
  { label: 'notification', icon: 'far fa-bell' },
  { label: 'following', icon: 'fas fa-user-plus' }
]


const Sider = props => {
  return (
    <Sidebar>
      <LogoWrapper />
      <LinksWrapper>
        {links.map((l, idx) => (
          <Link
            key={idx}
            isActive={(match) => match}
            activeClassName="active"
            to={`/${l.label}`}>
            <Icon className={l.icon} />
            <Label>{l.label}</Label>
          </Link>
        )
        )}
      </LinksWrapper>

    </Sidebar>
  )
}

Sider.propTypes = {

}

export default Sider
