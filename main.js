#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright(`
██████╗ ███████╗███╗   ██╗███████╗██████╗  █████╗ ██╗         ██╗  ██╗███╗   ██╗ ██████╗ ██╗    ██╗██╗     ███████╗██████╗  ██████╗ ███████╗     ██████╗ ██╗   ██╗██╗███████╗
██╔════╝ ██╔════╝████╗  ██║██╔════╝██╔══██╗██╔══██╗██║         ██║ ██╔╝████╗  ██║██╔═══██╗██║    ██║██║     ██╔════╝██╔══██╗██╔════╝ ██╔════╝    ██╔═══██╗██║   ██║██║╚══███╔╝
██║  ███╗█████╗  ██╔██╗ ██║█████╗  ██████╔╝███████║██║         █████╔╝ ██╔██╗ ██║██║   ██║██║ █╗ ██║██║     █████╗  ██║  ██║██║  ███╗█████╗      ██║   ██║██║   ██║██║  ███╔╝ 
██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║██║         ██╔═██╗ ██║╚██╗██║██║   ██║██║███╗██║██║     ██╔══╝  ██║  ██║██║   ██║██╔══╝      ██║▄▄ ██║██║   ██║██║ ███╔╝  
╚██████╔╝███████╗██║ ╚████║███████╗██║  ██║██║  ██║███████╗    ██║  ██╗██║ ╚████║╚██████╔╝╚███╔███╔╝███████╗███████╗██████╔╝╚██████╔╝███████╗    ╚██████╔╝╚██████╔╝██║███████╗
╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚══╝╚══╝ ╚══════╝╚══════╝╚═════╝  ╚═════╝ ╚══════╝     ╚══▀▀═╝  ╚═════╝ ╚═╝╚══════╝
                                                                                                                                 ╔╗ ┬ ┬  ╔╦╗┌─┐┬─┐┌─┐┬ ┬┌─┐┌┐┌┌┬┐┌─┐┌─┐┌┐┌┌─┐
                                                                                                                                 ╠╩╗└┬┘  ║║║├┤ ├┬┘│  ├─┤├─┤│││ │ └─┐│ ││││└─┐
                                                                                                                                 ╚═╝ ┴   ╩ ╩└─┘┴└─└─┘┴ ┴┴ ┴┘└┘ ┴ └─┘└─┘┘└┘└─┘ `));
let marks = 0;
// ****************** QUESTION 1 START *****************
const quiz1 = await inquirer.prompt([{ name: "question_1", type: "list", message: "\nQuestion 1. Desert is to oasis as ocean is to?", choices: ["Water", "Sand", "Sea", "Island"] },]);
switch (quiz1.question_1) {
    case "Island":
        console.log(chalk.greenBright("Correct Answer!"));
        marks++;
        break;
    default:
        console.log(chalk.redBright("Incorrect Answer!"));
}
// ******************** QUESTION 1 END *******************
// ******************* QUESTION 2 START ******************
const quiz2 = await inquirer.prompt([{ name: "question_2", type: "list", message: "\nQuestion 2. Which number follows?", choices: ["27", "34", "36", "45"] },]);
switch (quiz2.question_2) {
    case "36":
        console.log(chalk.greenBright("Correct Answer!"));
        marks++;
        break;
    default:
        console.log(chalk.redBright("Incorrect Answer!"));
}
// ******************** QUESTION 2 END *******************
// ******************* QUESTION 3 START ******************
const quiz3 = await inquirer.prompt([{ name: "question_3", type: "list", message: "Question 3. Choose the conclusion that validly follows from the argument: (All kittens are playful, Some pets are kittens Therefore:)", choices: ["All kittens are pets", "Some kittens are pets", "All pets are playful", "Some pets are playful"] },]);
switch (quiz3.question_3) {
    case "Some kittens are pets":
        console.log(chalk.greenBright("Correct Answer!"));
        marks++;
        break;
    default:
        console.log(chalk.redBright("Incorrect Answer!"));
}
// ******************** QUESTION 3 END *******************
// ******************* QUESTION 4 START ******************
const quiz4 = await inquirer.prompt([{ name: "question_4", type: "list", message: "Question 4. You are building an open-ended (straight) fence by stringing wire between posts 25 meters apart. If the fence is 100 meters long how many posts should you use?", choices: ["2", "3", "4", "5"] },]);
switch (quiz4.question_4) {
    case "4":
        console.log(chalk.greenBright("Correct Answer!"));
        marks++;
        break;
    default:
        console.log(chalk.redBright("Incorrect Answer!"));
}
// ******************** QUESTION 4 END *******************
// ******************* QUESTION 5 START ******************
const quiz5 = await inquirer.prompt([{ name: "question_5", type: "list", message: "Question 5. Real Madrid is first in the league, and Real Betis is fifth while Osasuna is right between them. If Barcelona has more points than Celta Vigo and Celta Vigo is exactly below Osasuna, who is second?", choices: ["Barcelona", "Osasuna", "Real Betis", "Celta Vigo"] },]);
switch (quiz5.question_5) {
    case "Osasuna":
        console.log(chalk.greenBright("Correct Answer!"));
        marks++;
        break;
    default:
        console.log(chalk.redBright("Incorrect Answer!"));
}
// ******************** QUESTION 5 END *******************
console.log(chalk.yellowBright(`\n( Total marks obtain ${marks} / 5 out of )`));
if (marks == 5) {
    console.log(chalk.greenBright("Weldone Greate Job."));
}
if (marks <= 1) {
    console.log(chalk.redBright("Not At Your Best IQ Level, Please Improve It."));
}
console.log(chalk.blueBright("Thanks For Playing This GK Quiz!!"));
