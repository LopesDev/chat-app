import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/screens/routes';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
