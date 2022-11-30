import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, writeBatch, documentId} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCP9snYUO_kw-zvQc4PWS86ytju_Obm3xQ",
    authDomain: "react-js-zavatti.firebaseapp.com",
    projectId: "react-js-zavatti",
    storageBucket: "react-js-zavatti.appspot.com",
    messagingSenderId: "817270106149",
    appId: "1:817270106149:web:29fddaceaf99bfc2abb7cc"
};


const FirebaseApp = initializeApp(firebaseConfig);
const DB = getFirestore(FirebaseApp);

    export function testDataBase(){
    console.log(FirebaseApp);
}

export async function getSingleItemFromAPI(id){
    try{
        const docRef = doc(DB, "Amapola Deco products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
            ...docSnap.data(),
            id: docSnap.id,
            } 
        } else {
            throw new Error("El Producto No Existe");
        }
    } catch(error){
        throw error;
    }
}

export async function getItemsFromAPI(){
    try {
        const collectionProducts = collection( DB, "Amapola Deco products" );
        let respuesta = await getDocs(collectionProducts);
        const products = respuesta.docs.map ( docu => {
            return {
                id: docu.id,
                ...docu.data()
            } 
        })
        return (products);
    } catch (error){
        console.log(error);
    }
}

export async function getItemsFromAPIByCategory(categoryId){
    const productsRef = collection(DB, "Amapola Deco products");
    const q = query(productsRef, where("category", "==", categoryId))

    const productsSnapshot = await getDocs(q);

    const emptyArray = productsSnapshot.docs.length < 1;
    if (emptyArray) throw new Error ("Categoria Inexistente");

    const products = productsSnapshot.docs.map ( docu => {
        return {
            id: docu.id,
            ...docu.data()
        };
    });
    return products;
}

export async function createBuyOrderFirestore(buyOrderData){
    const colletionRef = collection(DB, "orders")
    const docRef = await addDoc(colletionRef, buyOrderData);
    
    return (docRef.id);
}

/* export async function exportItemsToFirestore(){

    const myArray = [
        {
          id: 1,
          title:"Almohadones",
          imgurl:"/img/almohadones1.webp",
          price: 3000,
          detail: "Lorem imsup bla bla bla",
          category: "tela",
          stock: 23
    },
    {
          id: 2,
          title:"Espejos",
          imgurl:"/img/espejo1.webp",
          price:5000,
          detail: "Lorem imsup bla bla bla",
          category: "colgantes",
          stock: 17
    },
        {
          id: 3,
          title:"Cuadros",
          imgurl:"/img/cuadro1.webp",
          price:6000,
          detail: "Lorem imsup bla bla bla",
          category: "colgantes" ,
          stock: 15
    },
     
      {
          id: 4,
          title:"Individuales",
          imgurl:"/img/indiividuales.webp",
          price:1500,
          detail: "Lorem imsup bla bla bla",
          category: "tela",
          stock: 56
        },
    
        {
        id: 5,
        title:"Lamparas",
        imgurl:"/img/lampara1.webp",
        price:5000,
        detail: "Lorem imsup bla bla bla",
        category: "colgantes" ,
        stock: 14
      },
    
        {
        id: 6,
        title:"Alfombras",
        imgurl:"/img/alfombra1.webp",
        price:7000,
        detail: "Lorem imsup bla bla bla",
        category: "tela",
        stock: 22
        },
        {
            id: 7,
            title:"Bodega Madera",
            imgurl:"/img/bodegamadera.webp",
            price:7000,
            detail: "Lorem imsup bla bla bla",
            category: "maderas",
            stock: 10
    },
        {
            id: 8,
            title:"Frutera",
            imgurl:"/img/frutera.webp",
            price:7000,
            detail: "Lorem imsup bla bla bla",
            category: "fruteras",
            stock: 20
        },
              
        {
            id: 9,
            title:"Mesas Ratonas",
            imgurl:"/img/mesamaderanordica.webp",
            price:7000,
            detail: "Lorem imsup bla bla bla",
            category: "maderas",
            stock: 15
        },          
      {
          id: 10,
            title:"Sillones Acapulco",
            imgurl:"/img/silonacapulco.webp",
            price:7000,
            detail: "Lorem imsup bla bla bla",
            category: "sillones",
            stock: 10
        },
        {
          id: 11,
          title:"Bodega",
          imgurl:"/img/bodega madera2.webp",
          price:7000,
          detail: "Lorem imsup bla bla bla",
          category: "maderas",
          stock: 12
      },
      {
        id: 12,
        title:"Delantal Asador",
        imgurl:"/img/delantal asador.webp",
        price:7000,
        detail: "Lorem imsup bla bla bla",
        category: "tela",
        stock: 25
    },
    {
      id: 13,
      title:"Living Exterior",
      imgurl:"/img/living exterior sillon.webp",
      price:7000,
      detail: "Lorem imsup bla bla bla",
      category: "sillones",
      stock: 10
    },
    {
      id: 14,
      title:"Mesa Ratona Nordica",
      imgurl:"/img/mesa ratona nordica.webp",
      price:7000,
      detail: "Lorem imsup bla bla bla",
      category: "maderas",
      stock: 15
    }                    
    ];

    const collectionRef = collection(DB, "Amapola Deco products")
    for (let item of myArray){
        item.index = item.id;
        delete item.id;
        const docRef = await addDoc(collectionRef, item);
        console.log(docRef);
    }
} */

/// control de stock ///

/* export async function createBuyOrderFirestoreWithStock(buyOrderData){
    const collectionProductsRef = collection(DB, "Amapola Deco products");
    const collectionOrdersRef = collection(DB, "orders");
    const batch = writeBatch();
    /* const docRef = await addDoc(colletionRef, buyOrderData); 
    let arraysIds = buyOrderData.items.map (item => item.id)
    const q = query (collectionProductsRef, where (documentId(), 'in' , arraysIds))
    
    let products = await getDocs (q);
    products.map ( doc => {
        let stockActual = doc.data().stock;
        let itemInCart = buyOrderData.items.find ( item => item.id === doc.id )
        let stockActualizado = stockActual - itemInCart.count;
        batch.update (doc.ref, { stock: stockActualizado});
    } )
    
    batch.commit(); 
} */

