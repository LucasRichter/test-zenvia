import React, { useState, useRef, useEffect } from 'react'
import { Flex, Box } from '@rebass/grid'
import styled, { css } from 'styled-components'
import Text from './Text'
import colors from '../utils/colors'
import List from './List'

const Container = styled(Flex)`
  border-radius: 4px;
  border: 1px solid ${colors.grey};
  position: relative;
  cursor: pointer;
  transition: all .325s ease-in-out;

  &::after {
    content: '▾';
    position: absolute;
    font-size: 14px;
    color: black;
    right: 5px;
  }

  ${p => p.disabled && css`
    pointer-events: none;
    opacity: .5;
  `}
`

const Select = ({
  label,
  placeholder,
  list,
  onChange,
  disabled,
  id,
  value
}) => {
  const [open, setOpen] = useState(false)
  const currentRef = useRef()

  const handleClickOutside = (event) => {
    if (currentRef && !currentRef.current.contains(event.target)) {
      setOpen(false)
    }
  }


  const getOption = option => {
    let value = option
    let text = option
    if (typeof option === 'object') {
      value = option.ID
      text = option.Name
    }

    return { value, text }
  }

  const find = list.find(option => getOption(option).value === value)
  const display = getOption(find).text

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [])

  return (
    <Container
      p='10px'
      id={id}
      disabled={disabled}
      width='100%'
      ref={currentRef}
      onClick={() => setOpen(!open)}
    >
      <Box mr='5px'>
        {label && <Text>{label}:</Text>}
      </Box>
      {placeholder && value === undefined && (
        <Text>{placeholder}</Text>
      )}
      {value !== undefined && (
        <Text
          color='black'
          bold
        >
          {display}
        </Text>
      )}
      {open && (
        <List>
          {list.map(o => {
            let {value, text} = getOption(o)

            return (
              <Box
                key={text}
                p='10px'
                onClick={() => onChange({ id, value })}
              >
                <Text>{text}</Text>
              </Box>
            )
          })}
        </List>
      )}
    </Container>
  )
}

Select.propTypes = {

}

Select.defaultProps = {
  list: []
}

export default Select
