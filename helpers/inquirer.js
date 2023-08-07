const inquirer = require('inquirer');

require('colors');

const menuOptions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want?',
        choices: [{
            value: '1',
            name: `${'1.'.green} Add task`,            
        },{
            value: '2',
            name: `${'2.'.green} Show task`,
        },{
            value: '3',
            name: `${'3.'.green} Show complete task`,
        },{
            value: '4',
            name: `${'4.'.green} Show pending task`,
        },{
            value: '5',
            name: `${'5.'.green} Complete task(s)`,
        },{
            value: '6',
            name: `${'6.'.green} Delete task`,
        },{
            value: '0',
            name: `${'0.'.green} Exit`,
        }],
    }
];

const inquirerMenu = async () => {
    console.log('================='.green);
    console.log('  Select an option'.green);
    console.log('=================\n'.green);

    const { option } = await inquirer.prompt(menuOptions);
    return option;
}

const pause = async () => {
    const question = [{
        type: 'input',
        name: 'enter',
        message: `Press ${'ENTER'.green} to continue...`
    }]
    await inquirer.prompt(question);
}

module.exports = {
    inquirerMenu,
    pause,
}