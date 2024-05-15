#! /usr/bin/env node
// Addition Calculator
import inquirer from "inquirer";
let userAns = await inquirer.prompt([{
        name: "ans1",
        type: "number",
        message: "Enter First number"
    },
    {
        name: "ans2",
        type: "number",
        message: "Enter Second number"
    }]);
console.log(userAns.ans1 + userAns.ans2);
