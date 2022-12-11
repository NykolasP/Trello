import React from 'react'
import { Button, ListItem } from "@rneui/themed";
import { useContext } from "react";
import { Alert, Dimensions, View } from "react-native";
import { TrelloContext } from '../context';
import {useNavigation} from '@react-navigation/native';

export default function ListElement({ item, navigation, modif }){
    const { user, setElementEnCours } = useContext(TrelloContext);
    const navigatione = useNavigation();
    function handleClick() {
        setElementEnCours(item.id)
        navigation.push("Detail Element")
    }
    return (
        <View style={{ width: Dimensions.get('window').width }}>
           <ListItem.Swipeable bottomDivider
                leftContent={(reset) => (
                    <Button
                        title="Info"
                        onPress={handleClick}
                        icon={{ name: 'info', color: 'white' }}
                        buttonStyle={{ minHeight: '100%' }}
                    />
                )}
                rightContent={(reset) => (
                    <Button
                        title="Delete"
                        //onPress={}
                        icon={{ name: 'delete', color: 'white' }}
                        buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                    />
                )}
                onPress={handleClick}
            >
                <ListItem.Title>{item.titreelement}</ListItem.Title>

            </ListItem.Swipeable>
        </View>
    )
}