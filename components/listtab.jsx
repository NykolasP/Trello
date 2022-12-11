import React from 'react'
import { Button, ListItem } from "@rneui/themed";
import { useContext } from "react";
import { Alert, Dimensions, View } from "react-native";
import { TrelloContext } from '../context';
import {useNavigation} from '@react-navigation/native';
import ListDetElement from './ListDetElement';


export default function Listtab({ item, navigation, modif }){
    const { user, setListEnCours } = useContext(TrelloContext);
    function handleClick() {
        setListEnCours(item.id)
        navigation.push("Liste Elements")
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
                <ListItem.Content>
                    <ListItem.Title>{item.titretab}</ListItem.Title>
                    {/* {item.contenttab.map((elem, key) => <ListDetElement key={key} item={elem} />)} */}
                </ListItem.Content>
            </ListItem.Swipeable>
            
        </View>
    )
}