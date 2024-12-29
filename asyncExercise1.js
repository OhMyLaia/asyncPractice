// Ejercicio 1: Crear y consumir una promesa simple

// Crea una promesa que simule una operación que tarda 2 segundos en completarse.
//  Si el número generado aleatoriamente (0-10) es mayor o igual a 5, resuelve con “Éxito”.
//  Si no, rechaza con “Error”.




async function newPromise() {

    return new Promise (async (resolve, reject) => {

        let randomNum = Math.random() * 10;
        await delay (randomNum);
        
        if (randomNum <= 5) {
            resolve(`successful bitx`)
        } else {
            reject(`you are a failure`)
        }
    });
}


// async function newPromise2() {
//     return new Promise(async (resolve, reject) => {
//         let randomNum = Math.random() * 10; // Genera un número aleatorio entre 0 y 10
//         console.log(`Número generado: ${randomNum.toFixed(2)}`);
        
//         await delay(2); // Espera 2 segundos
        
//         if (randomNum >= 5) {
//             resolve("Éxito");
//         } else {
//             reject("Error");
//         }
//     });
// }


// newPromise.then((successMessage) => console.log(successMessage));
// newPromise.catch((errorMessage) => console.log(errorMessage));


async function operation() {
    try {
        let result = await newPromise();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

operation();

function delay(num) {
    return new Promise( resolve => setTimeout (resolve, num * 1000));
}