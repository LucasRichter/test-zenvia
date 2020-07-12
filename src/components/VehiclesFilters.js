import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { loadMakes } from '../__store__/make'
import { connect } from 'react-redux'
import { Box, Flex } from '@rebass/grid'
import Checkbox from './Checkbox'
import Select from './Select'
import Text from './Text'
import Button from './Button'
import styled from 'styled-components'
import { loadModels } from '../__store__/model'
import { loadVersion } from '../__store__/version'
import PlacesAutocomplete from './PlacesAutocomplete'
import { loadVehicles } from '../__store__/vehicle'

const defaultFilters = {
  new: false,
  used: false,
  distance: '100km',
  make: '',
  version: '',
  model: '',
  year: undefined,
  price: ''
}

const Content = styled(Box)`
  @media (min-width: 967px) {
    max-height: 312px;
  }
`

const distances = [
  '10km',
  '30km',
  '50km',
  '70km',
  '100km'
]

const VehiclesFilters = ({
  loadMakes,
  loadVersion,
  loadModels,
  models,
  versions,
  loadVehicles,
  makes
}) => {
  const [filters, setFilters] = useState(defaultFilters)
  const [years, setYears] = useState([])

  useEffect(() => {
    const effect = () => {
      const currentYear = new Date().getFullYear()
      const list = []
      for (let i = 0; i < 20; i++) {
        list.push(currentYear - i)
      }
      setYears(list)
    }
    effect()
  }, [])

  const onChange = ({ id, value }) => {
    setFilters({
      ...filters,
      [id]: value
    })
  }
  useEffect(() => {
    loadMakes()
  }, [loadMakes])

  useEffect(() => {
    if (filters.make) {
      loadModels(filters.make)
    }
  }, [filters.make, loadModels])

  useEffect(() => {
    if (filters.model) {
      loadVersion(filters.model)
    }
  }, [filters.model, loadVersion])

  return (
    <Content
      bg='white'
      p='20px 40px'
    >
      <Flex
        flexWrap='wrap'
      >
        <Checkbox
          id='new'
          onChange={onChange}
          defaultChecked={filters.new}
          label='Novo'
        />
        <Box
          ml='20px'
        >
          <Checkbox
            id='used'
            onChange={onChange}
            defaultChecked={filters.used}
            label='Usado'
          />
        </Box>
      </Flex>

      <Flex
        flexWrap='wrap'
      >
        <Box
          flexGrow='1'
          flexBasis='0'
          mt='20px'
          mr='20px'
        >
          <Flex
            flexWrap={['wrap', 'nowrap']}
          >
            <PlacesAutocomplete />
            <Select
              id='distance'
              value={filters.distance}
              label='Raio'
              onChange={onChange}
              list={distances}
            />
          </Flex>
          <Flex
            mt='20px'
            flexWrap='wrap'
          >
            <Box
              flexGrow='1'
              flexBasis='0'
              mr='20px'
            >
              <Select
                id='year'
                onChange={onChange}
                value={filters.year}
                list={years}
                placeholder='Ano Desejado'
              />
            </Box>

            <Box
              flexGrow='1'
              flexBasis='0'
            >
              <Select placeholder='Faixa de preço' />
            </Box>
          </Flex>
        </Box>
        <Box
          flexGrow='1'
          flexBasis='0'
        >
          <Flex
            mt='20px'
            flexWrap='wrap'
          >
            <Box
              flexGrow='1'
              flexBasis='0'
              mr='20px'
            >
              <Select
                id='make'
                value={filters.make}
                label='Marca'
                onChange={({id, value}) => {
                  setFilters({
                    ...filters,
                    [id]: value,
                    model: ''
                  })
                }}
                list={makes}
              />
            </Box>

            <Box
              flexGrow='1'
              flexBasis='0'
            >
              <Select
                id='model'
                disabled={!filters.make}
                label='Modelo'
                value={filters.model}
                onChange={({id, value}) => {
                  setFilters({
                    ...filters,
                    id: value,
                    version: ''
                  })
                }}
                list={models}
              />
            </Box>
          </Flex>

          <Box
            mt='20px'
          >
            <Select
              id='version'
              label='Versão'
              disabled={!filters.model}
              value={filters.version}
              onChange={onChange}
              list={versions}
            />
          </Box>
        </Box>
      </Flex>
      <Flex
        mt='20px'
        alignItems='center'
        justifyContent='space-between'
      >
        <Text red >› Buscas avançadas</Text>

        <Flex
          alignItems='center'
          justifyContent={['center', 'flex-start']}
          flexWrap='wrap'
        >
          <Box
            style={{ cursor: 'pointer' }}
            mb={[20, 0]}
            oncClick={() => setFilters(defaultFilters)}
          >
            <Text>Limpar Filtros</Text>
          </Box>

          <Box
            ml='20px'
          >
            <Button
              red
              onClick={() => loadVehicles(filters)}
            >
              Ver ofertas
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Content>
  )
}

VehiclesFilters.propTypes = {
  loadMakes: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  makes: state.makes,
  versions: state.versions,
  models: state.models
})

const mapDispatchToProps = {
  loadMakes,
  loadModels,
  loadVersion,
  loadVehicles
}
export default connect(mapStateToProps, mapDispatchToProps)(VehiclesFilters)
