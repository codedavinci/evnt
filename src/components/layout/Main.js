import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from './Header'
import Sider from './Sider'
import Footer from './Footer'


const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`

// const Content = styled.div`
//   background-color: red;
// `

const Main = ({ children }) => {
  return (
    <Container>
      <Sider />
      {/* <Content>Foo </Content> */}
    </Container>
  )
}

Main.propTypes = {

}

export default Main
