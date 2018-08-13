import React from 'react'
import { Header } from 'components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import ShoppingCartContainer from "../containers/ShoppingCartContainer";

const Container = styled.div`text-align: center;`

function Routes() {
  return (
    <Router>
      <Container>
        <Header />
        <Route path="/" component={ShoppingCartContainer} />
      </Container>
    </Router>
  )
}

export default Routes
