import React from 'react'
import { Button, ListItem } from "@rneui/themed";
import { useContext } from "react";
import { Alert, Dimensions, View } from "react-native";
import { TrelloContext } from '../context';
import {useNavigation} from '@react-navigation/native';
import { deleteTrello } from '../api/trello';

export default function List({ item, navigation, modif  }){
    const { user, setTabEnCours } = useContext(TrelloContext);
    const navigatione = useNavigation();
    function handleClick() {
        setTabEnCours(item.id)
        navigation.push("Listes Tableaux")
    }
    function handleDelete() {
        deleteTrello(user.uid, item.id).then((data) => {
            modif(data)
        }).catch(err => {
            console.log(err);
        })
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
                        onPress={handleDelete}
                        icon={{ name: 'delete', color: 'white' }}
                        buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                    />
                )}
                onPress={handleClick}
            >
                <ListItem.Title>{item.titre}</ListItem.Title>

            </ListItem.Swipeable>
        </View>
    )
}