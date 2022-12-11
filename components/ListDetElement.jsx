import React from 'react'
import { Button, ListItem } from "@rneui/themed";
import { Alert, Dimensions, View } from "react-native";


export default function ListDetElement({ item }){
    
    return (
        <View>
           <ListItem>
                <ListItem.Title>{item.titreelement}</ListItem.Title>
            </ListItem>
        </View>
    )
}