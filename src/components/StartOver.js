import React from 'react'
import { Flex } from '../../styles/Box'

export default function StartOver (props) {

  return (
    <Flex marginTop='30px'>
      <h5>Thanks for your feedback. We'll use it to help make this app better in the future.
      </h5>
      <button type='reset' onClick={props.startOver}>Start over</button>
    </Flex>
  )
}
