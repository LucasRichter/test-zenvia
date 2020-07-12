import styled, { css } from 'styled-components'
import colors from '../utils/colors'

export default styled.button`
  appearance: none;
  font-size: 15px;
  font-family: 'Poppins';
  padding: 8px 30px;
  font-weight: bold;

  ${p => p.yellow && css`
    color: ${colors.yellow};
    background-color: transparent;
    border: 2px solid ${colors.yellow};
  `}

  ${p => p.red && css`
    background-color: ${colors.red};
    color: white;
    font-size: 20px;
    text-transform: uppercase;
  `}
`