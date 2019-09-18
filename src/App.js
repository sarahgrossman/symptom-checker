import React, { Component } from 'react'
import GlobalStyle from '../styles/Global'
import styled from 'styled-components'
import SymptomSelector from './components/SymptomSelector'
import LogoHeader from './components/LogoHeader'
import Diagnosis from './components/Diagnosis'
import DiagnosisSelector from './components/DiagnosisSelector'
import StartOver from './components/StartOver'
import * as API from './api'
import { selectAppDiagnosis } from '../utils'

const nullState = {
  symptom: '',
  diagnoses: [],
  appDiagnosis: {},
  diagnosisSeen: false,
  diagnosisAccepted: false,
  userDiagnosis: '',
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
  margin-top: 30px;
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
      .then(({ diagnoses }) => {
        const appDiagnosis = selectAppDiagnosis(diagnoses)
        this.setState({ diagnoses, appDiagnosis })
      })
      .then(() => this.scrollToPosition('diagnosis'))
      .catch(() => alert('Please select a symptom'))
  }

  handleSelectChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleDiagnosisFeedback (e) {
    const diagnosisAccepted = e.target.value === 'true'
    if (diagnosisAccepted) {
      this.handleDiagnosisSubmit(null, true)
    }
    this.setState({
      diagnosisAccepted,
      diagnosisSeen: true,
      feedbackComplete: diagnosisAccepted
    }, () => {
      const hash = diagnosisAccepted ? 'start-over' : 'diagnosis-selector'
      this.scrollToPosition(hash)
    })
  }

  handleDiagnosisSubmit (e, useAppDiagnosis = false) {
    if (this.state.feedbackComplete) return

    const diagnosis = useAppDiagnosis
      ? this.state.appDiagnosis.name
      : this.state.userDiagnosis

    API.setDiagnosis(this.state.symptom, diagnosis)
      .then(() => {
        this.setState({ feedbackComplete: true }, () => {
          this.scrollToPosition('start-over')
        })
      })
      .catch(e => alert('An error occurred.'))
  }

  startOver () {
    this.setState(nullState, () => this.scrollToPosition('header'))
  }

  scrollToPosition (id) {
    const position = document.getElementById(id).offsetTop
    window.scrollTo(0, position)
  }

  render () {
    const {
      symptom,
      diagnoses,
      appDiagnosis,
      diagnosisSeen,
      diagnosisAccepted,
      feedbackComplete
    } = this.state


    return (
      <React.Fragment>
        <GlobalStyle />
        <FlexContainer id='header'>
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
            diagnosis={appDiagnosis}
            handleDiagnosisFeedback={this.handleDiagnosisFeedback} />}
          {diagnosisSeen && !diagnosisAccepted &&
          <DiagnosisSelector
            handleSelectChange={this.handleSelectChange}
            handleSubmit={this.handleDiagnosisSubmit}
            diagnoses={diagnoses} />}
          {feedbackComplete &&
          <StartOver startOver={this.startOver} diagnoses={diagnoses} />}
        </FlexContainer>
      </React.Fragment>
    )
  }
}
