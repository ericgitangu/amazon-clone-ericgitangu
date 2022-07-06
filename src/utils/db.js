import { db } from '../firebase.js'
import { doc, getDoc, updateDoc, collection, getDocs, setDoc } from "firebase/firestore";

export const getDocument = async(_collection, id) => {
    console.warn(`getDocument: collection: ${_collection}, id: ${id}`)
    const docRef = doc(db, _collection, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        return null
    };

}

export const addDocument = async(_collection, id,  data) => {
    console.warn(`Collection: ${_collection}, ID: ${id}, data: ${JSON.stringify(data)} `)
    await setDoc(doc(db, _collection, id), data)
}

export const updateCollection = async(_collection, _id, data) => {
    console.warn(`Collection: ${_collection}, ID: ${_id}, data: ${JSON.stringify(data)} `)
    const docRef = doc(db, _collection, _id);
    await updateDoc(docRef, data); 
}

export const updateCollectionId = async ( _collection, _id) => {
    const docRef = doc(db, _collection, _id);
    await updateDoc(docRef, {
        id: _id
    }); 
}

export const getCollection = async (_collection) => {
    const col = collection(db, _collection);
    const snaps = await getDocs(col);
     // eslint-disable-next-line
    snaps.docs.map(doc => {
        updateCollectionId(_collection, doc.id)
    });
    const list = snaps.docs.map(doc => {
        return doc.data()
    });

    if(list) {
        return list
    } else {
        console.warn("No such documents!");
        return null
    }
}