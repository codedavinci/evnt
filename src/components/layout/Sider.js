import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link as L } from 'react-router-dom'

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0 60px 0 0;
`

const Link = styled(L)`
  font-size: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  text-decoration: none;
`

const LogoWrapper = styled.div`
  flex: 1;
  border-radius: 0 60px 0 0;
`

const LinksWrapper = styled.ul`
  flex: 5;   
  display: flex;
  flex-direction: column;
  list-style: none;
`




const links = ['dashboard', 'home', 'settings', 'notification', 'following']


const Sider = props => {
  return (
    <Sidebar>
      <LogoWrapper />
      <LinksWrapper>
        {links.map(l => <Link key={l} to={`/${l}`}>{l}</Link>)}
      </LinksWrapper>

    </Sidebar>
  )
}

Sider.propTypes = {

}

export default Sider
