import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState(["Mlbzada 2023", "Amigos"]);

  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subtitle="Joga com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
      <GroupCard title="teste" />
    </Container>
  );
}
