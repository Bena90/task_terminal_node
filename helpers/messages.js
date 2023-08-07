require('colors');

const showMenu = () => {

    return new Promise( resolve => {

        console.log(`${'1'.america}. Create task`)
        console.log(`${'2'.america}. Show task`)
        console.log(`${'3'.america}. Show complete task`)
        console.log(`${'4'.america}. Show pending task`)
        console.log(`${'5'.america}. Complete task(s)`)
        console.log(`${'6'.america}. Delete task`)
        console.log(`${'0'.america}. Exit\n`)
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccione una opción: ', (opt) => {
            readline.close();
            resolve(opt);
        });
    });
};

const pause = () => {
    return new Promise( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        readline.question(`Presione ${'ENTER'.green} para continuar`, () => {
            readline.close();
            resolve();
        });
    });
};

module.exports = {
    showMenu,
    pause,
}