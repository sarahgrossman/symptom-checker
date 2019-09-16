import React from 'react'
import { Flex, SectionContainer } from '../../styles/Box'
import Button from '../../styles/Button'

function DiagnosisFrequency (props) {
  const { diagnosis, total } = props

  let frequency = diagnosis.frequency
    ? ((diagnosis.frequency) / total * 100).toFixed(2)
    : 0

  return (
    <div>
      <p>{diagnosis.name[0].toUpperCase() + diagnosis.name.slice(1)}:
        <span> {frequency}%</span>
      </p>
    </div>
  )
}

export default function StartOver (props) {
  const totalResponses = props.diagnoses.reduce((acc, curr) => {
    acc += curr.frequency
    return acc
  }, 0)

  return (
    <SectionContainer id='start-over'>
      <h2>
        Thanks for your feedback. We'll use it to help make this app better in the future.
      </h2>
      <h2>Just so you know, here's what other users chose:</h2>
      <Flex alignItems='flex-start' flexDirection='column'>
        {props.diagnoses
          .sort((curr, next) => next.frequency - curr.frequency)
          .map(diagnosis => (
            <DiagnosisFrequency
              key={diagnosis.name}
              diagnosis={diagnosis}
              total={totalResponses} />
            ))}
      </Flex>
      <Flex justifyContent='flex-end' marginTop='-20px'>
        <Button type='reset' onClick={props.startOver}>Start over</Button>
      </Flex>
    </SectionContainer>
  )
}
