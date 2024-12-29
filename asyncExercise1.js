// Ejercicio 1: Crear y consumir una promesa simple

// Crea una promesa que simule una operación que tarda 2 segundos en completarse.
//  Si el número generado aleatoriamente (0-10) es mayor o igual a 5, resuelve con “Éxito”.
//  Si no, rechaza con “Error”.



// manera A):
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


async function operation() {
    try {
        let result = await newPromise();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}


// operation();

// manera B) :
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
newPromiseArrow.then((successMessage) => console.log(successMessage))
// newPromiseArrow.catch((errorMessage) => console.log(errorMessage));





function delay(num) {
    return new Promise( resolve => setTimeout (resolve, num * 1000));
}