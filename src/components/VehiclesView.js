import React from 'react'
import { Flex, Box } from '@rebass/grid'
import Detail from './Detail'
import formatCurrency from '../utils/formatCurrency'
import colors from '../utils/colors'

const VehiclesView = ({
  vehicle
}) => {
  return (
    <Flex
      bg='white'
      p='20px'
      width='100%'
      alignItems='center'
      flexWrap='wrap'
      my='20px'
      justifyContent='space-between'
      style={{ border: `1px solid ${colors.grey}` }}
    >
      <Box
        as='img'
        mb={[20, 0]}
        width={['100%', '420px']}
        src={vehicle.Image}
      />

      <Flex
        ml='20px'
        flexWrap='wrap'
        flexGrow='1'
        flexBasis='0'
      >
        <Box
          flexGrow='1'
          flexBasis='0'
        >
          <Detail
            title='Modelo'
            text={vehicle.Model}
          />

          <Detail
            title='Marca'
            text={vehicle.Make}
          />

          <Detail
            title='Versão'
            text={vehicle.Version}
          />

          <Detail
            title='KM'
            text={vehicle.KM}
          />
        </Box>

        <Box
          flexGrow='1'
          flexBasis='0'
        >
          <Detail
            title='Preço'
            text={formatCurrency(vehicle.Price)}
          />

          <Detail
            title='Ano do modelo'
            text={vehicle.YearModel}
          />

          <Detail
            title='Ano do fabricação'
            text={vehicle.YearFab}
          />

          <Detail
            title='Cor'
            text={vehicle.Color}
          />
        </Box>
      </Flex>
    </Flex>
  )
}

VehiclesView.propTypes = {

}

export default VehiclesView
