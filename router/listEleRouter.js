import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ElementList from "../vues/elementList";
import { NewElementList } from "../vues/newElementList";



const Tab = createMaterialBottomTabNavigator();

export function ListElementRouter() {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Elements" component={ElementList} />
            <Tab.Screen name="Nouveau Element" component={NewElementList} />
        </Tab.Navigator>
    )
}