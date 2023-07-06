import { Groups } from "@screens/Groups";
import theme from "./src/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { ThemeProvider } from "styled-components";
import { Loading } from "@components/Loading";
import { StatusBar } from "react-native";
import { NewGroups } from "@screens/NewGroups";

export default function App() {
  const [fontsloaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsloaded ? <NewGroups /> : <Loading />}
    </ThemeProvider>
  );
}
