import React from 'react'
import { Box } from '@rebass/grid'
import Text from './Text'

const Detail = ({
  title,
  text,
  ...props
}) => {
  return (
    <Box
      mb='20px'
      {...props}
    >
      <Text color='black'>{title}</Text>

      <Box mt='10px'>
        <Text small>{text}</Text>
      </Box>
    </Box>
  )
}

Detail.propTypes = {

}

export default Detail
