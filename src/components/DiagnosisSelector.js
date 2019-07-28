import React, { Component } from 'react'
import { MarginContainer, Flex } from '../../styles/Box'
import { StyledOption, StyledSelect } from '../../styles/Select'


export default function SymptomSelector (props) {
    return (
      <Flex
        marginTop='30px'
        flexDirection='column'
        alignItems='center'>
        <h5>Which of the following seems like a better match to you?</h5>
        <StyledSelect
          name='userDiagnosis'
          onChange={props.handleSelectChange}>
          <StyledOption>Select a diagnosis</StyledOption>
          {props.diagnoses.map(diagnosis => (
            <StyledOption key={diagnosis.name} value={diagnosis.name}>{diagnosis.name}</StyledOption>
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
