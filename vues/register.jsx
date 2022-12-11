import { Button, Input, Text, Icon } from "@rneui/themed";
import { useContext } from "react";
import { useState } from "react";
import { Alert, Keyboard, StatusBar, View } from "react-native";
import { createUser } from "../api/connect";
import { TrelloContext } from "../context";
import { styles } from "../styles";

export function Register() {
    const [login, setLogin] = useState("");
    const [mdp, setMdp] = useState("");
    const [confirm, setConfirm] = useState("");
    const { setUser } = useContext(TrelloContext);

    function handleClick() {
        Keyboard.dismiss()
        if (confirm === mdp) {
            createUser(login, mdp).then(data => {
                setUser(data)
            }).catch(err => {
                Alert.alert(err)
            })
        } else {
            Alert.alert("Mot de passes différents")
        }
    }

    return (
        <>
            <View style={styles.containerTitreA}>
                    <Text style={styles.titreA}>Trello</Text>
                </View>
            <View style={styles.container}>
                <Input leftIcon={<Icon name='chevron-right' size={24} color='black'/>} placeholder="Login" keyboardType="email-address" value={login} onChangeText={setLogin} />
                <Input leftIcon={<Icon name='chevron-right' size={24} color='black'/>} placeholder="Mot de passe" secureTextEntry={true} value={mdp} onChangeText={setMdp} />
                <Input leftIcon={<Icon name='chevron-right' size={24} color='black'/>} placeholder="Confirmer le mot de passe" secureTextEntry={true} value={confirm} onChangeText={setConfirm} />
                <Button buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }} containerStyle={{width: 200, marginHorizontal: 50, marginVertical: 10, borderRadius: 30}} onPress={handleClick}>Inscription</Button>
                <StatusBar style="auto" />
            </View>
        </>
    );
}