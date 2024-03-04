import { initializeApp } from "firebase/app";



import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,

} from "firebase/auth"

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
 } from "firebase/firestore"; 


const firebaseConfig = {
    apiKey: "AIzaSyA7fRcqqWMPP1BS4xWe5ROhjoVo13TYGvw",
    authDomain: "shopper-app-db.firebaseapp.com",
    projectId: "shopper-app-db",
    storageBucket: "shopper-app-db.appspot.com",
    messagingSenderId: "111750533153",
    appId: "1:111750533153:web:08249f0ce89bce16bdd360"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
  

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);



export const db = getFirestore();

export const addCollectionAndDocuments = async(
    collectionKey,
    objectsToAdd,
    field
    ) =>{ 
    const collectionRef = collection(db,collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) =>{
        const docRef = doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
    });
    await batch.commit(); 
    console.log("Already added");
}

export const getCategoriesAndDocuments = async() =>{
    const collectionRef = collection(db, "categories");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot) =>{
        
        const {title,items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
         
    },{});

    return categoryMap;
  


}


export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
    ) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);
    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot.exists());


    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log("Error creating the user", error.message);
        }
    }
    return userDocRef;
    //checking user data

    // return user data

}


export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);