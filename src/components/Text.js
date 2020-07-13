import styled, { css } from 'styled-components'
import colors from '../utils/colors'

const Text = styled.p`
  color: ${p => p.color || colors.black};
  font-size: ${p => p.size || '15px'};
  font-family: 'Roboto', sans-serif;

  ${p => p.center && css`
    text-align: center;
  `}

  ${p => p.small && css`
    font-size: 12px;
  `}

  ${p => p.big && css`
    font-size: 18px;
  `}

  ${p => p.bold && css`
    font-weight: bold;
  `}
`

export default Text
