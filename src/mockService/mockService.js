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

export default function getItemsFromAPI(){

    return new Promise ( (resolve) => {
        setTimeout( ()=> {
                resolve (myArray);
        }, 500);
    });
}

export function getSingleItemFromAPI(idParams) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let itemRequested = myArray.find((item) => item.id === Number(idParams));
  
        if (itemRequested) {
          resolve(itemRequested);
        } else {
          reject(new Error("El item no existe."));
        }
      }, 500);
    });
  }

  export  function getItemsFromAPIByCategory(categoryid){

    return new Promise ( (resolve) => {
        setTimeout( ()=> {
          let itemRequested = myArray.filter (item => item.category === categoryid)
                resolve (itemRequested);
        }, 500);
    });
}