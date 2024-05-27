import inquirer from "inquirer";
//Task:
// 1) Miles-to-kilometers Converter (Operations):
// First we create a variable named miles and assign a value
let miles = 60;
// 1 miles = 1.60934 kilometers
let convertedToKilometers = miles * 1.60934;
console.log(` The distance of ${miles} mil is equal to ${convertedToKilometers}km`);
// Task 1 completed. In this task we convert miles into kilometers through Operator
//Task 2:
// 2) Evaluting a Number game:
// Prompt the user to enter a number
while (true) {
    let numberGame = await inquirer.prompt([
        {
            name: "number",
            type: "number",
            message: "Guess a number between 0 and 10 if you will correct you will win"
        }
    ]);
    let computerGeneratedNo = Math.floor(Math.random() * 10);
    console.log(computerGeneratedNo);
    if (computerGeneratedNo == numberGame.number) {
        console.log("you won");
        break;
    }
    else {
        console.log("you lost ! Please Guess again");
    }
}
// // 3.Friend checker game:
// // • Prompt the user to enter a name.
// // • Use a switch statement to check if the entered name is a known friend.
// // • Output a confirmation message if the name is known, otherwise output a default
// // response
let name = await inquirer.prompt([
    {
        type: "string",
        name: "name",
        message: "Enter your name"
    }
]);
let userGuessedName;
switch (name.name) {
    case "taha":
    case "ali":
    case "aziz":
        userGuessedName = "you are my friend";
        break;
    default: userGuessedName = (`you are not my friend`);
}
console.log(userGuessedName);
