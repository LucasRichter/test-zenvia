import React from 'react'
import styled, { css } from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Text from './Text'
import colors from '../utils/colors'
import Icon from './Icon'

const Container = styled(Box)`
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    left: 0;
    bottom: 0;
    transition: width .325s ease-in-out;
    background-color: ${colors.red};
    ${p => p.active && css`
      width: 100%;
    `}
  }


  ${Text} {
    text-transform: uppercase;
  }

`

const Tab = ({
  active,
  id,
  onClick,
  title,
  subtitle,
  icon
}) => {
  return (
    <Container
      active={active}
      onClick={() => onClick(id)}
    >
      <Flex
        p='0 10px 10px'
        alignItems='center'
      >
        {icon && <Icon size='40px' icon={icon} color={active ? colors.red : colors.grey} />}
        <Box ml='15px'>
          <Text small>{subtitle}</Text>
          <Text big color={active && colors.red}>{title}</Text>
        </Box>
      </Flex>
    </Container>
  )
}

Tab.propTypes = {

}

export default Tab
