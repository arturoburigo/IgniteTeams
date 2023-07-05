import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  align-items: center;
  padding: 16px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
`;
