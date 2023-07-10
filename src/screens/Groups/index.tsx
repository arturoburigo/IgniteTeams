import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { ListEmpty } from "@components/ListEmpty";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";
import { groupGetAll } from "@storage/group/groupGetAll";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleGoToNewGroup() {
    navigation.navigate("new");
  }

  async  function fetchGroups() {
    try {
      const data = await groupGetAll()
      setGroups(data)
    } catch (error) {
      console.log(error)
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', {group})
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subtitle="Joga com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        contentContainerStyle={groups.length == 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        }
        renderItem={({ item }) => <GroupCard onPress={() => handleOpenGroup(item)} title={item} />}
      />
      <Button title="Criar turma" onPress={handleGoToNewGroup} />
    </Container>
  );
}
