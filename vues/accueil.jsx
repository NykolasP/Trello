import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import List from '../components/list';
import { styles } from "../styles";
import { TrelloContext } from '../context';
import { useContext, useState } from "react";
import { getAllTrellos } from '../api/trello';
import { useEffect } from "react";

const keyExtractor = (item, index) => item.id

export default function Accueil({ navigation }) {
  const {listes,user} = useContext(TrelloContext);
  const [Trellos, setTrellos] = useState([]);
  useEffect(() => {
    getAllTrellos(user.uid).then(data => {

        setTrellos([...data])
    }).catch(err => console.log(err))

  }, []);
  const Renderer = ({ item }) => {
    return <List item={item}  navigation={navigation} modif={setTrellos} />
  }
  return (
    <View >
      <FlatList
                keyExtractor={keyExtractor}
                data={Trellos}
                renderItem={Renderer}
            />
      <StatusBar style="auto" />
    </View>
  );
}