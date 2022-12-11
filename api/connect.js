import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./app";

const auth = getAuth(app);

export function createUser(email, password) {
    return new Promise((resolve, reject) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                resolve(userCredential.user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject(errorMessage)
                // ..
            });
    })
}

export function connectUser(email, password) {
    return new Promise((resolve, reject) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                resolve(userCredential.user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject(errorMessage)
                // ..
            });
    })
}

/* export async function SignInGoogle() {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // The signed-in user info.
    const user = result.user;
    // This gives you a Facebook Access Token.
    const credential = provider.credentialFromResult(auth, result);
    const token = credential.accessToken;
    console.log(result);
}*/