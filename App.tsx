import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { themeDark } from './src/global/styles/themes/dark';
import { themeLight } from './src/global/styles/themes/light';
import { NavigationIndex } from './src/navigation';

export default function App() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider theme={colorScheme === "light" ? themeLight : themeDark}>
      <StatusBar hidden={true} />

      <NavigationIndex />

    </ThemeProvider>
  );
}
