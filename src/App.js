import React, { Component } from 'react'
import styled from 'styled-components'
import SymptomSelector from './components/SymptomSelector'
import LogoHeader from './components/LogoHeader'

const FlexContainer = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  height: 100vw;
  width: 100vw;
`

const Heading = styled.h1`
  margin-top: 3rem;
  font-family: Helvetica, sans-serif;
  font-weight: normal;
`

export default class App extends Component {
  render () {
    return (
      <FlexContainer>
        <LogoHeader />
        <Heading>You're in the right place.<br /> Let's get you diagnosed.</Heading>
        <SymptomSelector />
      </FlexContainer>
    )
  }
}
