import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';

const Root = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Root.Navigator initialRouteName={HomeScreen.name}>
      <Root.Screen
        name={HomeScreen.name}
        component={HomeScreen}
        options={{
          title: 'Hello Word!',
        }}
      />
    </Root.Navigator>
  );
}

export default RootNavigator;
