
// ejercicio1();
// ejercicio2();
ejercicio3();


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

// Ejercicio 3: Simular una API
function ejercicio3() {
    loginAttempt();
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

// Crea una función simularAPI
// que reciba un ID de usuario
// y devuelva sus datos después de 1 segundo.
// Si el ID no es un número, lanza un error.
async function apiSimulator(userID) {

    return new Promise (async (resolve, reject) => {
        await delay(1);
    
        if (isNaN(userID)) {
            reject(`error, invalid data`);

        } else {
            resolve(`login successful`);
        }
    }
)}

async function loginAttempt() {

    const userID = process.argv[2];
    console.log(userID);
    try {
        let result = await apiSimulator(userID);
        console.log(result);

    } catch (error) {
        console.error(error);
    }
}

