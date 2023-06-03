import { NavigationContainer, ThemeProvider, DarkTheme } from '@react-navigation/native';
import RootNavigator from './src/screens/routes';

export default function App() {
  return (
    <ThemeProvider value={DarkTheme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
