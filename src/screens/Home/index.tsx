import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Styles from './Home.styled';

function HomeScreen() {
  return (
    <View style={Styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;
