import { uuidv4 } from "@firebase/util";
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { app } from "./app";

const database = getDatabase(app);

export function ajoutTrello(uid, nomTrello) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `Trellos/${uid}`)).then((snapshot) => {
                const data = snapshot.val() ?? [];
                data.push({ id: uuidv4(), titre: nomTrello, content: [] })
                set(ref(database, 'Trellos/' + uid), data);
                resolve(data)
            }).catch(err => {
                console.log(err);
            });
        }
        catch (e) {
            reject(e)
        }
    })
}
export function getAllTrellos(uid) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database, 'Trellos/' + uid);
            onValue(reference, (snapshot) => {
                const data = snapshot.val();
                resolve(data)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function deleteTrello(uid, idTrello) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `Trellos/${uid}`)).then((snapshot) => {
                const data = snapshot.val();
                const num = data.findIndex((elem) => elem.id === idTrello)
                data.splice(num, 1)
                set(ref(database, 'Trellos/' + uid), data);
                resolve(data)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}