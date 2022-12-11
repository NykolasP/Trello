import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Connect } from '../vues/connect';
import { Register } from '../vues/register';


const Tab = createMaterialBottomTabNavigator();

export function ConnectRouter() {
    return (
        <NavigationContainer  theme={DarkTheme}>
            <Tab.Navigator activeColor="#fff" inactiveColor="#fff">
                <Tab.Screen name="Connect" options={{
                    tabBarLabel: 'Connect',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }} component={Connect} />
                <Tab.Screen name="Register" options={{
                    tabBarLabel: 'Register',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }} component={Register} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}