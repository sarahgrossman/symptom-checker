import React from 'react'
import {
  MarginContainer, SectionContainer, RelativeContainer, Flex
} from '../../styles/Box'
import Button from '../../styles/Button'
import { StyledSelect, StyledIcon } from '../../styles/Select'

export default function SymptomSelector (props) {
    return (
      <SectionContainer id='diagnosis-selector'>
        <h2>Which of the following seems like a better match?</h2>
        <MarginContainer marginBottom='30px' />
        <RelativeContainer width='100%'>
        <StyledSelect
          name='userDiagnosis'
          onChange={props.handleSelectChange}>
          <option>Select a diagnosis</option>
          {props.diagnoses.map(diagnosis => (
            <option key={diagnosis.name} value={diagnosis.name}>{diagnosis.name}</option>
            ))}
        </StyledSelect>
        <StyledIcon className='material-icons'>expand_more</StyledIcon>
        </RelativeContainer>
        <Flex marginTop='30px' justifyContent='flex-end'>
          <Button type='submit' onClick={props.handleSubmit}>
            Submit
          </Button>
        </Flex>
      </SectionContainer>
    )
}
