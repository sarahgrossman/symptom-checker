import styled from 'styled-components'
import { MarginContainer } from './Box'

const SelectComponent = MarginContainer.withComponent('select')

export const StyledSelect = styled(SelectComponent)`
  appearance: none;
  cursor: pointer;
  width: 400px;
  border-radius: 1px solid gray;
  background-color: white;
  padding: 10px;
  position: absolute;
  font-family: Helvetica, sans-serif;
  font-size: 21px;
`

const IconComponent = MarginContainer.withComponent('i')

export const StyledIcon = styled(IconComponent)`
  position: absolute;
  z-index: 5;
  right: 5px;
  cursor: pointer;
  pointer-events: none;
`
