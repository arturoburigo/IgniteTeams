import { Container, Title, Subtitle } from "./style";

type Propos = {
  title: string;
  subtitle: string;
};

export function HighLight({ subtitle, title }: Propos) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
