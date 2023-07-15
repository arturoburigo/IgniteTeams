import { useEffect, useState, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import { FlatList, TextInput } from "react-native";

import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { Container, FormData, HeaderList, NumberOfPlayers } from "./styles";
import { Alert } from "react-native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/players/playerAddByGroup";
import { playerGetByGroup } from "@storage/players/playerGetByGroup";
import { playersGetByGroupAndTeam } from "@storage/players/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/players/PlayerStorageDTO";

type RouteParams = {
  group: string;
};

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("TIME A");
  const [players, setPlayer] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();

  const { group } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        "Nova Pessoa",
        "Informe o nome da pessoa para adicionar"
      );
    }

    const newPlayer = {
      name: newPlayerName,
      team: team,
    };

    try {
      await playerAddByGroup(newPlayer, group);

      setNewPlayerName("");

      fetchPlayerByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova Pessoa", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova Pessoa", "Não foi possivel adicionar esta pessoa");
      }
    } finally {
      newPlayerNameInputRef.current?.blur();
    }
  }

  async function fetchPlayerByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayer(playersByTeam);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    fetchPlayerByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />
      <HighLight title={group} subtitle="adicione a galera e separe os times" />
      <FormData>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Digite aqui"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </FormData>

      <HeaderList>
        <FlatList
          data={["TIME A", "TIME B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item == team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <PlayerCard name={item.name} />}
        ListEmptyComponent={() => (
          <ListEmpty message="Nao ha pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  );
}
