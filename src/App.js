import React, { useState } from 'react'
import logo from './logo.svg'
import { Box, Flex } from '@rebass/grid'
import Tab from './components/Tab'
import Button from './components/Button'
import styled from 'styled-components'
import VehiclesFilters from './components/VehiclesFilters'
import Vehicles from './components/Vehicles'

const tabs = [
  {
    id: 'car',
    icon: 'car',
    title: 'Carros',
    subtitle: 'Comprar'
  },
  {
    id: 'motorcycle',
    icon: 'motorcycle',
    title: 'Motos',
    subtitle: 'Comprar'
  }
]

const Content = styled(Box)`
  max-width: 933px;
  margin: auto;
`

function App() {
  const [type, setType] = useState('car')
  return (
    <Box
      bg='#f4f4f4'
      px='5px'
      pb='50px'
    >
      <Content>
        <Box
          m='10px 0 40px'
          src={logo}
          as='img'
        />
        <Flex
          justifyContent='space-between'
          flexWrap={['wrap-reverse', 'wrap']}
        >
          <Flex>
            {tabs.map(options => (
              <Tab
                active={type === options.id}
                key={options.id}
                onClick={setType}
                {...options}
              />
            ))}
          </Flex>

          <Box
            mb={[20, 0]}
          >
            <Button
              yellow
            >
              Vender meu carro
            </Button>
          </Box>
        </Flex>

        <VehiclesFilters />

        <Box
          mt='20px'
        >
          <Vehicles />
        </Box>
      </Content>
    </Box>
  )
}

export default App;
