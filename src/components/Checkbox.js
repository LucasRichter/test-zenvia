import React from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'
import Text from './Text'

const Container = styled.label`
  display: flex;
  position: relative;
  cursor: pointer;
`

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  height: 16px;
  width: 16px;
  appearance: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  margin: 0;
  margin-right: 10px;
  border: 1px solid ${colors.grey};
  color: ${colors.red};

  &:checked::after {
    content: '✓';
    display: block;
    text-align: center;
    position: absolute;
    left: 3px;
    font-size: 12px;
    top: 1px;
  }
`

const Checkbox = ({ label, onChange, checked, id }) => (
  <Container>
    <StyledCheckbox
      checked={checked}
      id={id}
      onChange={() => onChange({ id, value: !checked })}
    />
    <Text as='span'>{label}</Text>
  </Container>
)

export default Checkbox
