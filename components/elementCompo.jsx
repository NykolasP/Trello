import React from 'react'
import { Button, ListItem } from "@rneui/themed";
import { Alert, Dimensions, View } from "react-native";
import { StyleSheet, Text } from 'react-native';


export default function ElementCompo({ item,navigation }){
    
    return (
        <View>
           <Text>{item.titreelement}</Text>
           <Text>{item.contentelement}</Text>
        </View>
    )
}