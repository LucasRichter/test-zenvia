import React from 'react'
import { Flex, Box } from '@rebass/grid'
import colors from '../utils/colors'
import Text from './Text'
import styled, { css } from 'styled-components'

const Container = styled(Flex)`
  border-radius: 4px;
  border: 1px solid ${colors.grey};
  cursor: pointer;
  align-items: center;
  transition: all .325s ease-in-out;
  max-height: 37px;

  ${p => p.disabled && css`
    pointer-events: none;
    opacity: .5;
  `}
`

const StyledInput = styled.input`
  appearance: none;
  font-size: 15px;
  outline: none;
  font-family: 'Poppins';
  border: none;
`

const Input = ({
  id,
  label,
  disabled,
  prefix,
  ...props
}) => {
  return (
    <Container
      p='10px'
      disabled={disabled}
      width='100%'
      as='label' htmlFor={id}
    >
      {prefix && (
        <Box mr='5px'>
          {prefix}
        </Box>
      )}
      <Box mr='5px'>
        {label && <Text>{label}:</Text>}
      </Box>
      <StyledInput
        id={id}
        {...props}
      />
    </Container>
  )
}

Input.propTypes = {

}

export default Input
