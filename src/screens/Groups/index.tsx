import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Container } from "./styles";

export function Groups() {
  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subtitle="Joga com a sua turma" />
      <GroupCard title="Mlbzada 2023" />
    </Container>
  );
}
