import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Accueil from "../vues/accueil";

import { NewTrelloList } from "../vues/newTrelloList";

const Tab = createMaterialBottomTabNavigator();

export function ListPRouter() {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Liste" component={Accueil} />
            <Tab.Screen name="NouveauTrello" component={NewTrelloList} />
        </Tab.Navigator>
    )
}