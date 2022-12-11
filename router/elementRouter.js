import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Element from "../vues/element";





const Tab = createMaterialBottomTabNavigator();

export function ElementRouter() {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Detail" component={Element} />
        </Tab.Navigator>
    )
}