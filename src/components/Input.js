import React from 'react'
import { Flex, Box } from '@rebass/grid'
import colors from '../utils/colors'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Container = styled(Flex)`
  border-radius: 10px;
  border: 1px solid ${colors.grey};
  cursor: pointer;
  align-items: center;
  transition: all .325s ease-in-out;
  max-height: 37px;
`

export const StyledInput = styled.input`
  appearance: none;
  font-size: 15px;
  outline: none;
  width: 100%;
  font-family: 'Roboto';
  border: none;
`

const Input = ({
  id,
  prefix,
  ...props
}) => {
  return (
    <Container
      p='10px'
      width='100%'
      as='label'
      htmlFor={id}
    >
      {prefix && (
        <Box
          id={`${id}-start-prefix`}
          mr='5px'
          style={{
            pointerEvents: 'none'
          }}
        >
          {prefix}
        </Box>
      )}
      <StyledInput
        id={id}
        {...props}
      />
    </Container>
  )
}

Input.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  prefix: PropTypes.element
}

export default Input
