import { uuidv4 } from "@firebase/util";
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { app } from "./app";

const database = getDatabase(app);

export function ajoutTableau(uid, tabEnCours, nomTableau) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `Trellos/${uid}`)).then((snapshot) => {
                const data = snapshot.val() ?? [];
                const indexCarnet = data.findIndex(elem => elem.id === tabEnCours)
                console.log("a");
                console.log(data[indexCarnet]);
                if (!data[indexCarnet].content) data[indexCarnet].content = []
                data[indexCarnet].content.push({ id: uuidv4(), titretab: nomTableau, contenttab: [] })
                console.log("b");
                console.log(data[indexCarnet]);
                set(ref(database, 'Trellos/' + uid), data[indexCarnet]);
                resolve(data[indexCarnet])
            }).catch(err => {
                console.log(err);
            });
        }
        catch (e) {
            reject(e)
        }
    })
}
export function getAllTableaux(uid,tabEnCours) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database, 'Trellos/' + uid);
            onValue(reference, (snapshot) => {
                const data = snapshot.val() ?? [];
                console.log(data.id)
                //const indexCarnet = data.findIndex(elem => elem.id === tabEnCours)
                
                //if (!data[indexCarnet].content) data[indexCarnet].content = []
                //resolve(data[indexCarnet].content)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function deleteTableau(uid, tabEnCours) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `Trellos/${uid}`)).then((snapshot) => {
                const data = snapshot.val() ?? [];
                const num_2 = data.findIndex((elem) => elem.id === tabEnCours)
                data.splice(num_2, 1)
                set(ref(database, 'Trellos/' + uid), data[num_2]);
                resolve(data)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}