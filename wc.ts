#!/usr/bin/env node
import inquirer from"inquirer";
const answers :{

    sentense:string
} =await inquirer.prompt({
    name:"sentense",
    type:"input",
    message:"Enter your sentense to count the word?",
})
const words=answers.sentense.trim().split(` `);
console.log(words);
console.log(`your sentense words count is ${words.length}`);