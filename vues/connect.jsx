import { Button, Input, Text, Icon  } from "@rneui/themed";
import { useContext } from "react";
import { useState } from "react";
import { Alert, Keyboard, StatusBar, View } from "react-native";
import { connectUser } from "../api/connect";
import { TrelloContext } from "../context";
import { styles } from "../styles";

export function Connect() {
    const [login, setLogin] = useState("nicolas.puechbroussoux@livecampus.tech");
    const [mdp, setMdp] = useState("testtest");
    const { setUser } = useContext(TrelloContext);
    
    function handleClick() {
        Keyboard.dismiss()
        //console.log(login, mdp);
        connectUser(login, mdp).then(data => {
            //console.log(data);
            setUser(data)
        }).catch(err => {
            Alert.alert(err)
        })
    }
    
    return (
        <>  
            <View style={styles.containerTitreA}>
                <Text style={styles.titreA}>Trello</Text>
            </View>
            <View style={styles.container}>
                <Input leftIcon={<Icon name='chevron-right' size={24} color='black'/>} placeholder="Login" keyboardType="email-address" value={login} onChangeText={setLogin} />
                <Input leftIcon={<Icon name='chevron-right' size={24} color='black'/>} placeholder="Mot de passe" secureTextEntry={true} value={mdp} onChangeText={setMdp} />
                <Button buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }} containerStyle={{ width: 200, marginHorizontal: 50,marginVertical: 10, borderRadius: 30,}} onPress={handleClick}>Connexion</Button>
                <StatusBar style="auto" />
            </View>
        </>
    );
}