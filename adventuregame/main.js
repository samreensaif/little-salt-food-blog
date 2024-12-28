#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//---------------------------------------------Player Class----------------------------------------------------
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    drinkportion() {
        this.fuel = 100;
    }
    knockoutpunch() {
        this.fuel = 0;
    }
}
//---------------------------------------------Opponent Class----------------------------------------------
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    knockoutpunch() {
        this.fuel = 0;
    }
}
//---------------------------------------------Welcome Note----------------------------------------------
let player = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "\nEnter Player's Name:"
});
let opponent = await inquirer.prompt({
    name: "name",
    type: "list",
    message: "\nSelect the Opponent:",
    choices: ["Skeleton", "Assassins", "Zombie"]
});
//-----------------------------change the player name in title case-------------------------------------------
let newname = player.name.split(" ").map((a) => a.charAt(0).toUpperCase() +
    a.slice(1).toLowerCase()).join(" ");
let p1 = new Player(newname);
let o1 = new Opponent(opponent.name);
console.log(chalk.bgMagenta.bold(`\n\t\t${p1.name} vs ${o1.name}\n`));
// do-while loop for 
do {
    if (opponent.name === "Skeleton") // after select Skeleton 
     {
        let ask = await inquirer.prompt({
            name: "op",
            type: "list",
            message: "\nSelect option from list",
            choices: ["Attack 🤺", "Drink Portion 🍹", "Run for life..🏃", "knock out punch"]
        });
        if (ask.op === "Attack 🤺") // select Attack
         {
            //generate random number. if num = 1 player fuel decreases if num = 0 opponent fuel decreases
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease(); // player fuel decreases by 25 in every turn
                console.log(chalk.bold.red(`\n\t${p1.name} Fuel: ${p1.fuel}`));
                console.log(chalk.bold.green(`\n\t${o1.name} Fuel: ${o1.fuel}`));
                if (p1.fuel <= 0) //if fuel becomes 0 , player lost the game
                 {
                    console.log(chalk.red.bold(`\n\n\t\t${p1.name}, You Loose.☹️💔\n\n\t\tBetter Luck Next Time\n\n\t\t🎲🎲🎲GAME OVER🎲🎲🎲`));
                    console.log(chalk.blueBright.bold.italic('\t\t\tTHANKS FOR PLAYING SSR-CLI-ADVENTURE GAME\t\t '));
                    process.exit(); //immediately exit from process
                }
            }
            else if (num <= 0) // opponent fuel decreases by 25 in every turn 
             {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`\n\t${p1.name} Fuel: ${p1.fuel}`));
                console.log(chalk.bold.red(`\n\t${o1.name} Fuel: ${o1.fuel}`));
                if (o1.fuel <= 0) //if opponent's fuel becomes 0 , player won the game
                 {
                    console.log(chalk.green.bold(`\n\n\t\t${p1.name}, You Won 🏆🏆🏆\n\n\t\t🎲🎲🎲GAME OVER🎲🎲🎲`));
                    console.log(chalk.blueBright.bold.italic('\t\t\tTHANKS FOR PLAYING SSR-CLI-ADVENTURE GAME\t\t'));
                    process.exit(); //immediately exit from process
                }
            }
        }
        else if (ask.op === "knock out punch") {
            //generate random number. if num = 0 player won and if num = 1 opponent won
            let num = Math.floor(Math.random() * 2);
            console.log(num);
            if (num === 0) {
                o1.knockoutpunch();
                console.log(chalk.green.bold(`\n\n\t\t${p1.name}, You Won 🏆🏆🏆\n\n\t\t🎲🎲🎲GAME OVER🎲🎲🎲`));
                console.log(chalk.blueBright.bold.italic('\t\t\tTHANKS FOR PLAYING SSR-CLI-ADVENTURE GAME\t\t'));
                process.exit(); //immediately exit from process
            }
            else if (num !== 0) {
                p1.knockoutpunch();
                console.log(chalk.green.bold(`\n\n\t\t${p1.name}, You lost\n\n\t\t🎲🎲🎲GAME OVER🎲🎲🎲`));
                console.log(chalk.blueBright.bold.italic('\t\t\tTHANKS FOR PLAYING SSR-CLI-ADVENTURE GAME\t\t'));
                process.exit(); //immediately exit from process
            }
        }
        else if (ask.op === "Drink Portion 🍹") //provide drink portion for player to increase fuel
         {
            p1.drinkportion();
            console.log(chalk.bold.blue.italic(`\n\n\t\t${p1.name}, 🍹 You drink Health Portion. Fuel: ${p1.fuel}`));
        }
        else if (ask.op === "Run for life..🏃") //if player run for life, player lost the game
         {
            console.log(chalk.red.bold(`\n\n\t\t${p1.name}, You Loose ☹️💔\n\n\t\t Better Luck Next Time \n\n\t\t🎲🎲🎲GAME OVER🎲🎲🎲`));
            console.log(chalk.blueBright.bold.italic('\t\t\tTHANKS FOR PLAYING SSR-CLI-ADVENTURE GAME\t\t '));
            process.exit(); //immediately exit from process
        }
    }
    else if (opponent.name === "Assassins") // after select Assassins 
     {
        let ask = await inquirer.prompt({
            name: "op",
            type: "list",
            message: "\nSelect option from list",
            choices: ["Attack 🤺", "Drink Portion 🍹", "Run for life..🏃"]
        });
        if (ask.op === "Attack 🤺") {
            //generate random number. if num = 1 player fuel decreases if num = 0 opponent fuel decreases
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease(); //player fuel decreases by 25 in every turn
                console.log(chalk.bold.red(`\n\t${p1.name} Fuel: ${p1.fuel}`));
                console.log(chalk.bold.green(`\n\t${o1.name} Fuel: ${o1.fuel}`));
                if (p1.fuel <= 0) //if fuel becomes 0 , player lost the game
                 {
                    console.log(chalk.red.bold(`\n\n\t\t ${p1.name}, You Loose.☹️💔 \n\n\t\tBetter Luck Next Time \n\n\t\t🎲🎲🎲GAME OVER🎲🎲🎲`));
                    console.log(chalk.blueBright.bold.italic('\t\t\tTHANKS FOR PLAYING SSR-CLI-ADVENTURE GAME\t\t '));
                    process.exit(); //immediately exit from process
                }
            }
            else if (num <= 0) // opponent fuel decreases by 25 in every turn
             {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`\n\t${p1.name} Fuel: ${p1.fuel}`));
                console.log(chalk.bold.red(`\n\t${o1.name} Fuel: ${o1.fuel}`));
                if (o1.fuel <= 0) //if opponent's fuel becomes 0 , player won the game
                 {
                    console.log(chalk.green.bold(`\n\n\t\t ${p1.name}, You Won.🏆🏆🏆 \n\n\t\t🎲🎲🎲GAME OVER🎲🎲🎲`));
                    console.log(chalk.blueBright.bold.italic('\t\t\tTHANKS FOR PLAYING SSR-CLI-ADVENTURE GAME\t\t '));
                    process.exit(); //immediately exit from process
                }
            }
        }
        else if (ask.op === "Drink Portion 🍹") //provide drink portion for player to increase fuel
         {
            p1.drinkportion();
            console.log(chalk.blue.bold(`\n\n\t\t${p1.name},🍹 You drink health portion. Fuel: ${p1.fuel}`));
        }
        else if (ask.op === "Run for life..🏃") //if player run for life, player lost the game
         {
            console.log(chalk.red.bold(`\n\n\t\t${p1.name}, You Loose. ☹️💔 \n\n\t\tBetter Luck Next Time \n\n\t\t🎲🎲🎲GAME OVER🎲🎲🎲`));
            console.log(chalk.blueBright.bold.italic('\t\t\tTHANKS FOR PLAYING SSR-CLI-ADVENTURE GAME\t\t '));
            process.exit(); //immediately exit from process
        }
    }
    else if (opponent.name === "Zombie") // after select Zombie
     {
        let ask = await inquirer.prompt({
            name: "op",
            type: "list",
            message: "\nSelect option from list",
            choices: ["Attack 🤺", "Drink Portion 🍹", "Run for life..🏃"]
        });
        if (ask.op === "Attack 🤺") {
            //generate random number. if num = 1 player fuel decreases if num = 0 opponent fuel decreases
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease(); //player fuel decreases by 25 in every turn
                console.log(chalk.bold.red(`\n\t${p1.name} Fuel: ${p1.fuel}`));
                console.log(chalk.bold.green(`\n\t${o1.name} Fuel: ${o1.fuel}`));
                if (p1.fuel <= 0) //if fuel becomes 0 , player lost the game
                 {
                    console.log(chalk.red.bold(`\n\t\t${p1.name}, You Loose.☹️💔\n\n\t\tBetter Luck Next Time \n\n\t\t🎲🎲🎲GAME OVER🎲🎲🎲`));
                    console.log(chalk.blueBright.bold.italic('\t\t\tTHANKS FOR PLAYING SSR-CLI-ADVENTURE GAME\t\t'));
                    process.exit(); //immediately exit from process
                }
            }
            else if (num <= 0) // opponent fuel decreases by 25 in every turn
             {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`\n\t${p1.name} Fuel: ${p1.fuel}`));
                console.log(chalk.bold.red(`\n\t${o1.name} Fuel: ${o1.fuel}`));
                if (o1.fuel <= 0) //if opponent's fuel becomes 0 , player won the game
                 {
                    console.log(chalk.green.bold(`\n\t\t${p1.name}, You Won 🏆🏆🏆\n\n\t\t🎲🎲🎲GAME OVER🎲🎲🎲`));
                    console.log(chalk.blueBright.bold.italic('\t\t\tTHANKS FOR PLAYING SSR-CLI-ADVENTURE GAME\t\t'));
                    process.exit(); //immediately exit from process
                }
            }
        }
        else if (ask.op === "Drink Portion 🍹") //provide drink portion for player to increase fuel
         {
            p1.drinkportion();
            console.log(chalk.blue.bold(`\n\n\t\t${p1.name} 🍹 You drink HEALTH PORTION. Fuel: ${p1.fuel}`));
        }
        else if (ask.op === "Run for life..🏃") //if player runs for life, player lost the game
         {
            console.log(chalk.red.bold(`\n\t\t${p1.name}, You Loose.☹️💔\n\n\t\t Better Luck Next Time \n\n\t\t🎲🎲🎲GAME OVER🎲🎲🎲`));
            console.log(chalk.blueBright.bold.italic('\t\t\tTHANKS FOR PLAYING SSR-CLI-ADVENTURE GAME\t\t'));
            process.exit(); //immediately exit from process
        }
    }
} while (true);
