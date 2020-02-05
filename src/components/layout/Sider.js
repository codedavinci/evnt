import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Sidebar = styled.div`
  width: 220px;
  height: 100%;
  min-height: 100vh;
  background-color: #1d45a8;
  border-radius: 0 60px 0 0;
`


const links = ['dashboard', 'home', 'settings', 'notification', 'following']

const Sider = props => {
  return (
    <Sidebar>
      {}
    </Sidebar>
  )
}

Sider.propTypes = {

}

export default Sider
