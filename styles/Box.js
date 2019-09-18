import styled from 'styled-components'

export const MarginContainer = styled.div`
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  margin: ${props => props.margin};
`

export const Flex = styled(MarginContainer)`
  display: flex;
  width: ${props => props.width ? props.width : '100%'};
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
`

export const RelativeContainer = styled(Flex)`
  align-items: center;
  position: relative;
  width: ${props => props.width};
`

export const SectionContainer = styled(Flex)`
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
  width: 400px;
`
