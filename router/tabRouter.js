import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NewTabList } from "../vues/newTablist";
import TabList from "../vues/tablist";


const Tab = createMaterialBottomTabNavigator();

export function TabRouter() {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Les Tableaux" component={TabList} />
            <Tab.Screen name="Nouveau Tableau" component={NewTabList} />
        </Tab.Navigator>
    )
}