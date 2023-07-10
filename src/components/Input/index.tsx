import { Container } from "./style";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

export function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme();

  return (
    <Container
      {...rest}
      placeholderTextColor={COLORS.GRAY_300}
      autoCorrect={false}
    />
  );
}
