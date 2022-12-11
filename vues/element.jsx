import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from "../styles";
import { TrelloContext } from '../context';
import { useContext } from "react";
import ListElement from '../components/listElement';
import ElementCompo from '../components/elementCompo';

export default function Element({ navigation }) {
    const {listes, listEnCours, tabEnCours,ElementEnCours} = useContext(TrelloContext);
    const item = listes.find((elem)=> elem.id === tabEnCours)
    const elemlist = item.content.find((elem)=> elem.id === listEnCours)
    const elem = elemlist.contenttab.find((elem)=> elem.id === ElementEnCours)
    return (
      <View>
          <Text><ElementCompo item={elem} /> </Text>
        <StatusBar style="auto" />
      </View>
    );
  }