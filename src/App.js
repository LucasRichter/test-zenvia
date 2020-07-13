import React from 'react'
import { Box } from '@rebass/grid'
import styled from 'styled-components'
import CharactersList from './components/CharactersList'
import Text from './components/Text'

const Content = styled(Box)`
  max-width: 1500px;
  width: 100%;
  margin: auto;
`

function App () {
  return (
    <Content>
      <Box
        my='40px'
        mx='auto'
      >
        <Text
          as='h1'
          size='40px'
          center
        >
          The Breaking Bad Characters
        </Text>
      </Box>
      <CharactersList />
    </Content>
  )
}

export default App
