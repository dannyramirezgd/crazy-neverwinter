const inquirer = require('inquirer')

async function firstQs(){
    const playerData = await inquirer.prompt([
        {
            type: "list",
            name: "race",
            message: "Which race would you like to play?",
            choices: [
                "Dwarf",
                "Elf",
                "Halfling",
                "Human",
                "Dragonborn",
                "Gnome",
                "Half-Elf",
                "Half-Orc",
                "Tiefling",

            ]
        },
        {
            type: "list",
            name: "class",
            message: "Which class would you like to play?",
            choices: [
                "Barbarian",
                "Bard",
                "Cleric",
                "Druid",
                "Fighter",
                "Monk",
                "Paladin",
                "Ranger",
                "Rogue",
                "Sorceror",
                "Warlock",
                "Wizard"
            ]
        }
    ])

    console.log(playerData)
}

module.exports = firstQs;