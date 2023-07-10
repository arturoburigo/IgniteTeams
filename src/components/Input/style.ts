import styled, { css } from "styled-components";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  flex: 1;
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  padding: 16px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    background-color: ${theme.COLORS.GRAY_700};
  `}

  border-radius: 6px;
`;
