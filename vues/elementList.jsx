import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { styles } from "../styles";
import { TrelloContext } from '../context';
import { useContext, useState } from "react";
import { useEffect } from "react";
import ListElement from '../components/listElement';
import { getAllElements } from '../api/element';

const keyExtractor = (item, index) => item.id

export default function ElementList({ navigation }) {
    const {user,listes, listEnCours, tabEnCours} = useContext(TrelloContext);
    // const item = listes.find((elem)=> elem.id === tabEnCours)
    // const elemlist = item.content.find((elem)=> elem.id === listEnCours)
    
    const [Element, setElement] = useState([]);
    useEffect(() => {
      getAllElements(user.uid, tabEnCours, listEnCours).then(data => {
        setElement([...data])
      }).catch(err => console.log(err))

    }, []);
    const Renderer = ({ item }) => {
      return <ListElement item={item}  navigation={navigation} modif={setElement} />
    }
    
    return (
      <View >
        <FlatList
                  keyExtractor={keyExtractor}
                  data={Element}
                  renderItem={Renderer}
              />
        <StatusBar style="auto" />
      </View>
    );
  }