import { Input, Button } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View } from "react-native";

import { TrelloContext } from "../context";

import { styles } from "../styles";

export function NewElementList() {
    const [nomElement, setNomElement] = useState("");
    const [contenuElement, setcontenuElement] = useState("");
    const { user } = useContext(TrelloContext);
    function handleClick() {
        console.log(nomTrello)
    }

    return (

        <View style={styles.container}>
            <Input placeholder="Titre Element" value={nomElement} onChangeText={setNomElement} />
            <Input placeholder="Contenu Element" value={contenuElement} onChangeText={setcontenuElement} />
            <Button onPress={handleClick}>Ajouter</Button>
            <StatusBar style="auto" />
        </View>
    )
}