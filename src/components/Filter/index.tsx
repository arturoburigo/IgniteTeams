import { TouchableOpacityProps } from "react-native";

import { Container, Title, FilterStyleProp } from "./styles";

type Props = TouchableOpacityProps &
  FilterStyleProp & {
    title: string;
  };

export function Filter({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
