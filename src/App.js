import React, { Component } from 'react'
import styled from 'styled-components'
import SymptomSelector from './components/SymptomSelector'
import LogoHeader from './components/LogoHeader'
import Diagnosis from './components/Diagnosis'
import * as API from './api'


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
  constructor (props) {
    super(props)

    this.state = {
      diagnoses: [],
      selectedDiagnosis: {}
    }

    this.handleSymptomSubmit = this.handleSymptomSubmit.bind(this)
  }

  handleSymptomSubmit (symptom) {
    API.getDiagnoses(symptom)
      .then(res => res.json())
      .then(({ diagnoses }) => this.setState({ diagnoses }))
      .catch(e => alert('Please select a symptom'))
  }

  render () {
    return (
      <FlexContainer>
        <LogoHeader />
        <Heading>You're in the right place.<br /> Let's get you diagnosed.</Heading>
        <SymptomSelector
          handleSubmit={this.handleSymptomSubmit} />
        {!!this.state.diagnoses.length &&
        <Diagnosis diagnoses={this.state.diagnoses} />}
      </FlexContainer>
    )
  }
}
