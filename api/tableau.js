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
                if (!data[indexCarnet].content) data[indexCarnet].content = []
                data[indexCarnet].content.push({ id: uuidv4(), titretab: nomTableau, contenttab: [] })
                 set(ref(database, 'Trellos/' + uid), data);
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

                const indexCarnet = data.findIndex(elem => elem.id === tabEnCours)
                if (!data[indexCarnet].content) data[indexCarnet].content = []
                resolve(data[indexCarnet].content)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function deleteTableau(uid, tabEnCours,listEnCours) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `Trellos/${uid}`)).then((snapshot) => {
                const data = snapshot.val() ?? [];
                const indexCarnet = data.findIndex(elem => elem.id === tabEnCours)
                const delTab = data[indexCarnet].findIndex(elem => elem.id === listEnCours)
                data.splice(delTab, 1)
                set(ref(database, 'Trellos/' + uid), data);
                resolve(data)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}