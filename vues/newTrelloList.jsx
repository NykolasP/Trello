import { Input, Button } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View } from "react-native";
import { ajoutTrello } from "../api/trello";

import { TrelloContext } from "../context";

import { styles } from "../styles";

export function NewTrelloList({ navigation }) {
    const [nomTrello, setNomTrello] = useState("");
    const { user } = useContext(TrelloContext);
    function handleClick() {
        ajoutTrello(user.uid, nomTrello).then(data => {
            navigation.push("Nos Trellos")
        }).catch(err => {
            console.log(err);
        })
    }

    return (

        <View style={styles.container}>
            <Input placeholder="Trello" value={nomTrello} onChangeText={setNomTrello} />
            <Button onPress={handleClick}>Ajout</Button>
            <StatusBar style="auto" />
        </View>
    )
}