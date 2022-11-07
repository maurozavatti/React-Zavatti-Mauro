/* backend*/

function APICall(){
    let error = true;

    let promesa = new Promise ( (resolve, reject) => {
        setTimeout( ()=> {
            if (error){
                reject("error")
            }
            else {
                resolve ({
                    id: "1",
                    name: "Mi Producto",
                    description: "El mejor producto",
                    stock: 15,
                });
            }
           
        }, 1000);
    });
    return promesa;
}

/* front-end */
console.log("1- inicia la app");

APICall().then(
        respuesta => console.log("2- Respuesta", respuesta),
).catch (
    rechazo => console.log("error en la promesa:", rechazo)
);

console.log("3- finaliza la app");