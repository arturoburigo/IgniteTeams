import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Name } from "./style";

type Props = {
  name: string;
};

export function PlayerCard({ name }: Props) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="SECONDARY" />
    </Container>
  );
}
