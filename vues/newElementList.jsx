import { Input, Button } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View } from "react-native";
import { ajoutElement } from "../api/element";

import { TrelloContext } from "../context";

import { styles } from "../styles";

export function NewElementList({ navigation }) {
    const [nomElement, setNomElement] = useState("");
    const [contenuElement, setcontenuElement] = useState("");
    const { user,tabEnCours,listEnCours } = useContext(TrelloContext);
    function handleClick() {
        ajoutElement(user.uid,tabEnCours,listEnCours, nomElement, contenuElement).then(data => {
            navigation.push("Liste Elements")
        }).catch(err => {
            console.log(err);
        })
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