import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ElementRouter } from './elementRouter';
import { ListElementRouter } from './listEleRouter';
import { ListPRouter } from './listPRouter';
import { TabRouter } from './tabRouter';


const Stack = createStackNavigator();

export function TrelloRouter() {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Nos Trellos" component={ListPRouter} />
                <Stack.Screen name="Listes Tableaux" component={TabRouter} />
                <Stack.Screen name="Liste Elements" component={ListElementRouter} />
                <Stack.Screen name="Detail Element" component={ElementRouter} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}