import React from 'react'
import { Flex, SectionContainer } from '../../styles/Box'
import Button from '../../styles/Button'

export default function StartOver (props) {
  return (
    <SectionContainer id='start-over'>
      <h2>
        Thanks for your feedback. We'll use it to help make this app better in the future.
      </h2>
      <Flex justifyContent='flex-end' marginTop='-20px'>
        <Button type='reset' onClick={props.startOver}>Start over</Button>
      </Flex>
    </SectionContainer>
  )
}
