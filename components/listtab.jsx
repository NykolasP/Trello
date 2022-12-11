import React from 'react'
import { Button, ListItem } from "@rneui/themed";
import { useContext } from "react";
import { Alert, Dimensions, View } from "react-native";
import { TrelloContext } from '../context';
import {useNavigation} from '@react-navigation/native';
import ListDetElement from './ListDetElement';
import { deleteTableau } from '../api/tableau';


export default function Listtab({ item, navigation, modif }){
    const { user,tabEnCours, setListEnCours } = useContext(TrelloContext);
    function handleClick() {
        setListEnCours(item.id)
        navigation.push("Liste Elements")
    }
    function handleDelete() {
        deleteTableau(user.uid,tabEnCours, item.id).then((data) => {
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
                <ListItem.Content>
                    <ListItem.Title>{item.titretab}</ListItem.Title>
                    {/* {item.contenttab.map((elem, key) => <ListDetElement key={key} item={elem} />)} */}
                </ListItem.Content>
            </ListItem.Swipeable>
            
        </View>
    )
}