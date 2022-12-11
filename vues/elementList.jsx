import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from "../styles";
import { TrelloContext } from '../context';
import { useContext } from "react";
import ListElement from '../components/listElement';

export default function ElementList({ navigation }) {
    const {listes, listEnCours, tabEnCours} = useContext(TrelloContext);
    const item = listes.find((elem)=> elem.id === tabEnCours)
    const elemlist = item.content.find((elem)=> elem.id === listEnCours)
    return (
      <View>
          {elemlist.contenttab.map((elem, key) => <ListElement key={key} item={elem} navigation={navigation} />)}
        <StatusBar style="auto" />
      </View>
    );
  }