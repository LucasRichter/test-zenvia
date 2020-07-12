import styled, { css } from 'styled-components'
import colors from '../utils/colors'

const Text = styled.p`
  color: ${p => p.color || colors.grey};
  font-size: 15px;
  font-family: 'Poppins';

  ${p => p.red && css`
    color: ${colors.red};
  `}

  ${p => p.small && css`
    font-size: 12px;
  `}

  ${p => p.big && css`
      font-size: 18px;
  `}
`

export default Text
