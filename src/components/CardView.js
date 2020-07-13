import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from '@rebass/grid'
import Text from './Text'
import Icon from './Icon'
import colors from '../utils/colors'
import styled, { css } from 'styled-components'
import TrackVisibility from 'react-on-screen'

const Content = styled(Flex)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  opacity: 0;
  transform: translate(50px, 5px);
  background: url(/images/cardBg.png);
  transition: all .325s ease-in-out;
  transition-delay: .125s;

  ${p => p.isVisible && css`
    opacity: 1;
    transform: translate(0px, 0px);
  `}
`

const CardView = ({
  name,
  urlImage,
  nickname,
  occupation,
  appearance,
  status,
  portrayed
}) => {
  return (
    <TrackVisibility
      once
      partialVisibility
    >
      <Content
        width={['100%', 450]}
        height='300px'
      >
        <Box
          width='225px'
          height='100%'
          style={{
            zIndex: 1
          }}
        >
          <Box
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              zIndex: -1,
              filter: `grayscale(${status !== 'alive' ? '100%' : '0%'})`,
              backgroundImage: `url(${urlImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
            width='225px'
            height='100%'
            as='img'
          />
          <Flex
            height='100%'
            flexDirection='column'
            style={{
              background: 'linear-gradient(to bottom, rgba(43,43,43,0) 0%,rgba(43,43,43,0) 40%,rgba(43,43,43,1) 100%)',
              zIndex: 0
            }}
            width='100%'
            p='15px'
            justifyContent='flex-end'
          >
            <Flex
              mb='12px'
              alignItems='center'
            >
              <Text big bold color='white'>{nickname}</Text>
              {status !== 'alive' && (
                <Box ml='10px'>
                  <Icon size='25px' icon='death' color='white' />
                </Box>
              )}
            </Flex>
            <Text small color='white'>{name}</Text>
          </Flex>
        </Box>
        <Flex
          flexDirection='column'
          height='100%'
          px='10px'
          py='25px'
          alignItems='center'
          flex='1 1 0'
        >
          <Text big bold color='white'>
            Informations
          </Text>

          <Box mt='30px'>
            <Box mt='12px'>
              <Text color='white'>
                Occupation: {occupation.join(', ')}
              </Text>
            </Box>

            <Box mt='12px'>
              <Text color='white'>
                Seasons: {appearance.map(a => (
                  <Box
                    as='span'
                    style={{
                      display: 'inline-block',
                      borderRadius: 4
                    }}
                    p='8px'
                    mx='2.5px'
                    backgroundColor={colors.green}
                    key={a}
                  >
                    <Text as='span' small bold color='white'>{a}</Text>
                  </Box>
                ))}
              </Text>
            </Box>

            <Box mt='12px'>
              <Text color='white'>
                Portrayed: <Text as='a' color='white' target='_blank' href={`https://pt.wikipedia.org/wiki/${portrayed.split(' ').join('_')}`}>{portrayed}</Text>
              </Text>
            </Box>
          </Box>
        </Flex>
      </Content>
    </TrackVisibility>

  )
}

CardView.propTypes = {
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  portrayed: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  occupation: PropTypes.array.isRequired,
  appearance: PropTypes.array.isRequired,
  urlImage: PropTypes.string.isRequired
}

export default CardView
