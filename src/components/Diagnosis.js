import React from 'react'
import { Flex } from '../../styles/Box'

export default function Diagnosis (props) {
  const mostCommon = props.diagnoses.reduce((curr, acc) => {
    return curr.frequency > acc.frequency ? curr : acc
  }, {})

  return (
    <Flex flexDirection='column'>
      <p>Your best match:</p>
      <p>{mostCommon.name}</p>
      <p>Does this seem right to you?</p>
      <Flex>
        <button
          type='submit'
          value='true'
          onClick={props.handleDiagnosisFeedback}>
          Yes
        </button>
        <button
          type='submit'
          value='false'
          onClick={props.handleDiagnosisFeedback}>
          No
        </button>
      </Flex>
    </Flex>
  )
}
