import { db } from '../firebase.js'
import { doc, getDoc, deleteDoc, updateDoc, collection, getDocs, setDoc } from "firebase/firestore"

export const getDocument = async(_collection, id) => {
    console.warn(`Fetching Document from collection ${_collection} by id: ${id}`)
    const docRef = doc(db, _collection, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        return null
    };

}

export const addDocument = async(_collection, id,  data) => {
    console.warn(`Adding Document to collection ${_collection} by id: ${id} with data: ${data}`)
    await setDoc(doc(db, _collection, id), data)
}

export const updateDocument = async(_collection, id, data) => {
    console.warn(`Updating Document from collection ${_collection} by id: ${id} with data: ${data}`)
    const docRef = doc(db, _collection, id);
    await updateDoc(docRef, JSON.stringify(data)); 
}

export const updateDocumentQuantity = async(_collection, id, quantity) => {
    try {
        console.warn(`Updating Document Quantity in collection ${_collection} by id: ${id} with data: ${quantity}`)
        const docRef = doc(db, _collection, id);
        await updateDoc(docRef, {
            quantity: quantity
        }); 
    } catch(err) {
        console.error(`updateDocumentQuantity error: ${err}`)
    }
}

export const updateCollectionId = async ( _collection, id) => {
    console.warn(`Updating Document id for ${_collection} with id: ${id}`)
    const docRef = doc(db, _collection, id);
    await updateDoc(docRef, {
        id: id
    }); 
}

export const getCollection = async (_collection) => {
    console.warn(`Fetching collection ${_collection}`)
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

export const deleteDocument = async (_collection, id) => {
    console.warn(`Deleting Document from collection ${_collection} by id: ${id}`)
    try{
        await deleteDoc(doc(db, _collection, id));
    } catch (err) {
        console.error(err)
    }
}