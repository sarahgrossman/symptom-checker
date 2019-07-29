import React from 'react'
import styled from 'styled-components'
import { Flex, MarginContainer, SectionContainer } from '../../styles/Box'
import Button from '../../styles/Button'

const DiagnosisText = styled.p`
  margin-top: 0rem;
  align-self: flex-start;
`

export default function Diagnosis (props) {
  return (
    <SectionContainer id='diagnosis'>
      <h2>Your best match, based on our experience, is:</h2>
      <DiagnosisText>
        {props.diagnosis.name[0].toUpperCase() + props.diagnosis.name.slice(1)}
      </DiagnosisText>
      <Flex flexDirection='column' marginTop='30px'>
        <DiagnosisText>Does this seem right to you?</DiagnosisText>
        <Flex marginTop='-10px' justifyContent='flex-end'>
          <Button type='submit' value='true' onClick={props.handleDiagnosisFeedback}>
            Yes
          </Button>
          <MarginContainer marginLeft='20px' />
          <Button type='submit' value='false' onClick={props.handleDiagnosisFeedback}>
            No
          </Button>
        </Flex>
      </Flex>
    </SectionContainer>
  )
}
