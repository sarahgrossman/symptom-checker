import React from 'react'
import { Flex } from '../../styles/Box'
import styled from 'styled-components'

const LogoContainer = styled(Flex)`
  padding-left: 10%;
  width: 100%;
  font-family: Helvetica, sans-serif;
`

export default function LogoHeader (props) {
  return (
    <LogoContainer
      justifyContent='flex-start'
      margin='100px 0'>
      instadoc
    </LogoContainer>
  )
}
