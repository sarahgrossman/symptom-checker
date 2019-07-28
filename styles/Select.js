import styled from 'styled-components'
import { MarginContainer } from './Box'

const SelectComponent = MarginContainer.withComponent('select')

export const StyledSelect = styled(SelectComponent)`
  appearance: none;
  cursor: pointer;
  width: 400px;
  border-radius: 1px solid gray;
  background-color: white;
  padding: 5px;
`

export const StyledOption = styled.option`
  height: 3rem;
  font-size: 2.1px;
  font-family: Helvetica, sans-serif;
  font-weight: normal;
`
