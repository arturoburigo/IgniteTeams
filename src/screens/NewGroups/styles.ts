import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 20px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_700,
}))`
  align-items: center;
`;
