
ejercicio1();
ejercicio2();

// Ejercicio 1: Crear y consumir una promesa simple
function ejercicio1() {
    const newPromiseArrow = new Promise (async (resolve, reject) => {

        let randomNum = Math.random() * 10;
        await delay (randomNum);
        
        if (randomNum <= 2) {
            resolve(`successful bitx`)
        } else {
            reject(`you are a failure`)
        }
    
    })
    
    // 1)
    // esto tambien podria ser asi, al final es lo mismo:
    // newPromiseArrow.then((successMessage) => console.log(successMessage)).catch((errorMessage) => console.log(errorMessage));
    
    newPromiseArrow
        .then((successMessage) => console.log(successMessage))
        .catch((errorMessage) => console.log(errorMessage));
    
    // ERROR)
    // el then y catch tiene que ser sobre un mismo objeto (gestionar el success y el error desde un mismo sitio)
    // newPromiseArrow.then((successMessage) => console.log(successMessage))
    // newPromiseArrow.catch((errorMessage) => console.log(errorMessage));
    
}

// Ejercicio 2: async y await
function ejercicio2() {
    operationEx2();
}

// Crea una promesa que simule una operación que tarda 2 segundos en completarse.
//  Si el número generado aleatoriamente (0-10) es mayor o igual a 5, resuelve con “Éxito”.
//  Si no, rechaza con “Error”.

// manera A):
async function newPromiseEx2() {

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

async function operationEx2() {
    try {
        let result = await newPromiseEx2();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

function delay(num) {
    return new Promise( resolve => setTimeout (resolve, num * 1000));
}
