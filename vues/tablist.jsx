import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import List from '../components/list';
import { styles } from "../styles";
import { TrelloContext } from '../context';
import { useContext, useState } from "react";
import { useEffect } from "react";
import { getAllTableaux } from '../api/tableau';
import Listtab from '../components/listtab';

const keyExtractor = (item, index) => item.id

export default function TabList({ navigation }) {
    const {listes,tabEnCours,user} = useContext(TrelloContext);
    //const item = listes.find((elem)=> elem.id === tabEnCours)

    const [Tableau, setTableaux] = useState([]);
    useEffect(() => {
      getAllTableaux(user.uid,tabEnCours).then(data => {
        setTableaux([...data])
      }).catch(err => console.log(err))

    }, []);
    const Renderer = ({ item }) => {
      return <Listtab item={item}  navigation={navigation} modif={setTableaux} />
    }

    return (
      <View >
        <FlatList
                  keyExtractor={keyExtractor}
                  data={Tableau}
                  renderItem={Renderer}
              />
        <StatusBar style="auto" />
      </View>
    );
  }