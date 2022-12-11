import { uuidv4 } from "@firebase/util";
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { app } from "./app";

const database = getDatabase(app);

export function ajoutElement(uid, tabEnCours,listEnCours, nomElement,contenuElement) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `Trellos/${uid}`)).then((snapshot) => {
                const data = snapshot.val() ?? [];
                const indexTableau = data.findIndex(elem => elem.id === tabEnCours)
                const indexListe = data[indexTableau].content.findIndex(elem => elem.id === listEnCours)
                if (data[indexTableau].content[indexListe]) {
                    data[indexTableau].content[indexListe].contenttab = []
                }
                data[indexTableau].content[indexListe].contenttab.push({ id: uuidv4(), titreElement: nomElement, contentElement: contenuElement })
                set(ref(database, 'Trellos/' + uid), data);
                resolve(data[indexTableau].content[indexListe].contenttab)
            }).catch(err => {
                console.log(err);
            });
        }
        catch (e) {
            reject(e)
        }
    })
}
export function getAllElements(uid,tabEnCours,listEnCours) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database, 'Trellos/' + uid);
            onValue(reference, (snapshot) => {
                const data = snapshot.val() ?? [];
                const indexTableau = data.findIndex(elem => elem.id === tabEnCours)
                const indexListe = data[indexTableau].content.findIndex(elem => elem.id === listEnCours)
                if (!data[indexTableau].content[indexListe]) data[indexTableau].content[indexListe].contenttab = []
                resolve(data[indexTableau].content[indexListe].contenttab)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function deleteElement(uid, tabEnCours,listEnCours) {
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