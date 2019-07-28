import React from 'react'

export default function Diagnosis (props) {
  const mostCommon = props.diagnoses.reduce((curr, acc) => {
    return curr.frequency > acc.frequency ? curr : acc
  }, {})

  return (
    <div>{mostCommon.name}</div>
  )
}
