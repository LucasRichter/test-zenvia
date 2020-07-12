import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadVehicles } from '../__store__/vehicle'
import { Flex } from '@rebass/grid'
import VehiclesView from './VehiclesView'

const Vehicles = ({
  loadVehicles,
  vehicles
}) => {
  useEffect(() => {
    loadVehicles()
  }, [loadVehicles])
  return (
    <Flex
      bg='white'
      flexWrap='wrap'
      p='10px'
    >
      {vehicles.map(v => (
        <VehiclesView
          key={v.ID}
          my='20px'
          vehicle={v}
        />
      ))}
    </Flex>
  )
}

Vehicles.propTypes = {
  prop: PropTypes
}

const mapStateToProps = (state) => ({
  vehicles: state.vehicles
})

const mapDispatchToProps = {
  loadVehicles
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles)
