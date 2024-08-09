import { useEffect } from "react";

//import { getFirestore, getDoc, doc } from "firebase/firestore";
//import { getFirestore, getDocs, collection } from "firebase/firestore";

/* import {
    getFirestore,
    getDoc,
    doc,
    updateDoc,
    collection,
    getDocs,
    query,
    where,
    limit,
    addDoc,
} from "firebase/firestore"; */

 import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore"; 

function App() {
    /*     //! documento by id
    
        useEffect(() => {
            const db = getFirestore();
    
            const refDoc = doc(db, "items", "Zaajtzazub7zde9krYpN");
    
            getDoc(refDoc).then((snapshot) => {
                // con esto agrego el id que esta por afuera para que tenga la forma de un JSON
                console.log({id:snapshot.id,...snapshot.data()});
                // console.log({ id: snapshot.id, ...snapshot.data() });
            });
        }, []); 
        */

    /*     useEffect(() => {
            const db = getFirestore();
    
            const refCollection = collection(db, "items");
    
            getDocs(refCollection).then((snapshot) => {
                //console.log(snapshot.docs)
    
                console.log(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    })
                );
            });
        }, []); */

    useEffect(() => {
        const db = getFirestore();

        const q = query(
            collection(db, "items"),
            where("categoryID", "!=", "ropa"),
            limit(3)
        );

        getDocs(q).then((snapshot) => {
            if (snapshot.size === 0) console.log("no results");
            else
                console.log(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    })
                );
        });
    }, []);
}

export default App;
