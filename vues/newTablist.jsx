import { StatusBar } from 'expo-status-bar';
import { Input, Button } from "@rneui/themed";
import React from 'react';
import { useState, useContext } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { styles } from "../styles";
import { TrelloContext } from "../context";
import { ajoutTableau } from '../api/tableau';

export function NewTabList({ navigation }) {
    const [nomTab, setNomTab] = useState("");
    const { user, tabEnCours } = useContext(TrelloContext);
    function handleClick() {
        ajoutTableau(user.uid,tabEnCours, nomTab).then(data => {
            navigation.push("Listes Tableaux")
        }).catch(err => {
            console.log(err);
        })
    }

    return (

        <View style={styles.container}>
            <Input placeholder="Nom Tableau" value={nomTab} onChangeText={setNomTab} />
            <Button onPress={handleClick}>Ajout Tableau</Button>
            <StatusBar style="auto" />
        </View>
    )
}