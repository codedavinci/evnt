import React from 'react'
import PropTypes from 'prop-types'
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

const LinksWrapper = styled.ul`
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
  margin: 0 15px;
  width: calc(100% - 30px);
  height: 50px;
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: -0.06em;
  text-decoration: none;
  transition: all 0.10s ease;
  &.active {
   color:${({ theme }) => theme.colors.primary};
   font-size: ${({ theme }) => theme.fontSizes.small};
   background-color: white;
   border-radius: 80px 80px;
 }
 &:hover {
  font-size: ${({ theme }) => theme.fontSizes.small};
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


const LoggedIn = ({ isAuthed = false }) => {
  return (
    <Link
      to='/logout'>
      <Icon className={`fas ${!isAuthed ? 'fa-sign-in-alt' : 'fa-sign-out-alt'}`} />
      <Label>{!isAuthed ? 'Login' : 'Logout'}</Label>
    </Link>

  )
}

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
      <LoggedIn />
    </Sidebar>
  )
}

Sider.propTypes = {

}

export default Sider
