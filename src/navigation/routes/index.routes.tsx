import { createStackNavigator } from '@react-navigation/stack';
import { StackScreenOptions } from '../../configs/navigation/stack/screen/options';
import { Login } from '../../screens/login';


export function IndexRoute() {
    const Stack = createStackNavigator();

    const { Navigator, Screen } = Stack;

    return (
        <Navigator screenOptions={StackScreenOptions}>
            <Screen name="Login" component={Login} />
        </Navigator>
    );
}