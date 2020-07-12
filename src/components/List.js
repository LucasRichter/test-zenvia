import styled from "styled-components";
import colors from "../utils/colors";
import Text from "./Text";
import { Box } from "@rebass/grid";

export default styled.ul`
  position: absolute;
  bottom: 0;
  border: 1px solid black;
  background-color: white;
  transform: translateY(100%);
  left: 0;
  cursor: pointer;
  max-height: 300px;
  overflow-y: scroll;

  width:100%;
  z-index: 1;

  ${Box}:hover {
    transition: all .325s ease-in-out;
    background-color: ${colors.red};

    ${Text} {
      color: white;
    }
  }
`