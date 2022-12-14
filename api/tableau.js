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
                const indexTableau = data.findIndex(elem => elem.id === tabEnCours)
                if (!data[indexTableau].content) data[indexTableau].content = []
                data[indexTableau].content.push({ id: uuidv4(), titretab: nomTableau, contenttab: [] })
                 set(ref(database, 'Trellos/' + uid), data);
                 resolve(data[indexTableau])
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

                const indexTableau = data.findIndex(elem => elem.id === tabEnCours)
                if (!data[indexTableau].content) data[indexTableau].content = []
                resolve(data[indexTableau].content)
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
                const indexTableau = data.findIndex(elem => elem.id === tabEnCours)
                const delTab = data[indexTableau].content.findIndex(elem => elem.id === listEnCours)
                data[indexTableau].content.splice(delTab, 1)
                set(ref(database, 'Trellos/' + uid), data);
                resolve(data[indexTableau].content)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}