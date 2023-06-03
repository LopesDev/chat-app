import { useTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Styles from './Home.styled';

function HomeScreen() {
  const theme = useTheme();

  return (
    <View style={[Styles.Container, { backgroundColor: theme.colors.background }]}>
      <StatusBar style="auto" />

      <Text style={{ color: theme.colors.text }}>This will be the login screen</Text>
    </View>
  );
}

export default HomeScreen;
