import React, { Component } from 'react'
import GlobalStyle from '../styles/Global'
import styled from 'styled-components'
import SymptomSelector from './components/SymptomSelector'
import LogoHeader from './components/LogoHeader'
import Diagnosis from './components/Diagnosis'
import DiagnosisSelector from './components/DiagnosisSelector'
import StartOver from './components/StartOver'
import * as API from './api'

const nullState = {
  symptom: '',
  diagnoses: [],
  diagnosisSeen: false,
  diagnosisAccepted: false,
  userDiagnosis: {},
  feedbackComplete: false
}

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

    this.state = nullState

    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleSymptomSubmit = this.handleSymptomSubmit.bind(this)
    this.handleDiagnosisFeedback = this.handleDiagnosisFeedback.bind(this)
    this.handleDiagnosisSubmit = this.handleDiagnosisSubmit.bind(this)
    this.startOver = this.startOver.bind(this)
  }

  handleSymptomSubmit () {
    API.getDiagnoses(this.state.symptom)
      .then(res => res.json())
      .then(({ diagnoses }) => this.setState({ diagnoses }))
      .catch(e => alert('Please select a symptom'))
  }

  handleSelectChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleDiagnosisFeedback (e) {
    this.setState({
      diagnosisAccepted: e.target.value === 'true', diagnosisSeen: true,
      feedbackComplete: e.target.value === 'true' })
  }

  handleDiagnosisSubmit (e) {
    API.setDiagnosis(this.state.symptom, this.state.userDiagnosis)
      .then(() => this.setState({ feedbackComplete: true }))
      .catch(e => alert('An error occurred.'))
  }

  startOver () {
    this.setState(nullState)
  }

  render () {
    const {
      symptom,
      diagnoses,
      diagnosisSeen,
      diagnosisAccepted,
      feedbackComplete
    } = this.state

    return (
      <React.Fragment>
        <GlobalStyle />
        <FlexContainer>
          <LogoHeader />
          <Heading>
            Thanks for stopping by.
            <br />
            Let's get you diagnosed.
          </Heading>
          <SymptomSelector
            symptom={symptom}
            handleSelectChange={this.handleSelectChange}
            handleSubmit={this.handleSymptomSubmit} />
          {!!diagnoses.length &&
          <Diagnosis
            diagnoses={diagnoses}
            handleDiagnosisFeedback={this.handleDiagnosisFeedback} />}
          {diagnosisSeen &&    !diagnosisAccepted &&
          <DiagnosisSelector
            handleSelectChange={this.handleSelectChange}
            handleSubmit={this.handleDiagnosisSubmit}
            diagnoses={diagnoses} />}
          {feedbackComplete &&
          <StartOver startOver={this.startOver} />}
        </FlexContainer>
      </React.Fragment>
    )
  }
}
