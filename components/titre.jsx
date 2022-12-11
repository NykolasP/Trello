import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Titre({ item }){
    return (
        <View>
            <Text>{item.nom}</Text>
        </View>
    )
}