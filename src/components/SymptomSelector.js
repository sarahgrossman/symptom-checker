import React from 'react'
import styled from 'styled-components'
import { MarginContainer, Flex } from '../../styles/Box'
import symptoms from '../../data/symptoms'

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

export default function SymptomSelector (props) {
  return (
    <Flex
      marginTop='30px'
      flexDirection='column'
      alignItems='center'>
      <StyledSelect
        name='symptom'
        onChange={props.handleSelectChange}>
        <StyledOption selected={!props.symptom}>
          Select a symptom
        </StyledOption>
        {symptoms.map(symptom => (
          <StyledOption
            key={symptom.name}
            value={symptom.name}>
            {symptom.name}</StyledOption>
          ))}
      </StyledSelect>
      <MarginContainer  marginTop='30px'>
        <button
          type='submit' onClick={props.handleSubmit}>
          Submit
        </button>
      </MarginContainer>
    </Flex>
  )
}
