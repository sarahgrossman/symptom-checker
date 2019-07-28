import React, { Component } from 'react'
import styled from 'styled-components'
import { MarginContainer } from '../../styles/Box'
import { symptoms } from '../../data/symptomMap'

const SelectComponent = MarginContainer.withComponent('select')

const StyledSelect = styled(SelectComponent)`
  appearance: none;
  cursor: pointer;
  width: 400px;
  border-radius: 1px solid gray;
  background-color: white;
  padding: 5px;
`

const StyledOption = styled.option`
  height: 3rem;
  font-size: 2.1px;
  font-family: Helvetica, sans-serif;
  font-weight: normal;
`

export default class SymptomSelector extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedSymptom: ''
    }

    this.handleSymptomChange = this.handleSymptomChange.bind(this)
  }

  handleSymptomChange (e) {
    this.setState({ selectedSymptom: [e.target.value] })
  }

  render () {
    return (
      <MarginContainer marginTop='30px'>
        <StyledSelect onChange={this.handleSymptomChange}>
          {!this.state.selectedSymptom && <StyledOption>Select a symptom</StyledOption>}
          {symptoms.map(symptom => (
            <StyledOption key={symptom.name} value={symptom.name}>{symptom.name}</StyledOption>
            ))}
        </StyledSelect>
      </MarginContainer>
    )
  }
}
