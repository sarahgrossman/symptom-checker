import React from 'react'
import { SectionContainer, Flex, RelativeContainer } from '../../styles/Box'
import { StyledSelect, StyledIcon } from '../../styles/Select'
import Button from '../../styles/Button'
import symptoms from '../../data/symptoms'

export default function SymptomSelector (props) {
  return (
    <SectionContainer>
      <RelativeContainer width='400px'>
      <StyledSelect name='symptom' onChange={props.handleSelectChange}>
        <option selected={!props.symptom}>
          Select a symptom
        </option>
        {symptoms.map(symptom => (
          <option key={symptom.name} value={symptom.name}>
            {symptom.name}
          </option>
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
