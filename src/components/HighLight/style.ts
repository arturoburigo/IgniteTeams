import styled, {css} from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;

  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Subtitle = styled.Text`

  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  text-align: center;
`;
