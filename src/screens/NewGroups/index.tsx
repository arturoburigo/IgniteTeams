import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { HighLight } from "@components/HighLight";
import { Container, Content, Icon } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroups() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  function handlePlayers() {
    navigation.navigate("players", { group });
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <HighLight
          title="Nova turma"
          subtitle="Crie uma nova turma para jogar"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button
          title="Criar"
          onPress={handlePlayers}
          style={{ marginTop: 26 }}
        />
      </Content>
    </Container>
  );
}
