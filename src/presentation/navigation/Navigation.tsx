import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreens} from '../screens/home/HomeScreens';
import {DetailsScreen} from '../screens/details/DetailsScreen';

export type RootStackParams = {
  Home: undefined;
  Details: undefined;
};
const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreens} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
