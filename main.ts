import inquirer from "inquirer"
//Task:

// 1) Miles-to-kilometers Converter (Operations):

// First we create a variable named miles and assign a value
let miles = 60;

// 1 miles = 1.60934 kilometers

let convertedToKilometers = miles * 1.60934
console.log(` The distance of ${miles} mil is equal to ${convertedToKilometers}km`)

// Task 1 completed. In this task we convert miles into kilometers through Operator


//Task 2:
// 2) Evaluting a Number game:

// Prompt the user to enter a number
while(true){
let numberGame = await inquirer.prompt([
    {
        name:"number",
        type:"number",
        message:"Guess a number between 0 and 10 if you will correct you will win"
    }
])
let computerGeneratedNo=Math.floor(Math.random()*10)
console.log(computerGeneratedNo);

if (computerGeneratedNo == numberGame.number){
    console.log("you won");
    break;

}else{
    console.log("you lost ! Please Guess again");
    
}
}

// // 3.Friend checker game:
// // • Prompt the user to enter a name.
// // • Use a switch statement to check if the entered name is a known friend.
// // • Output a confirmation message if the name is known, otherwise output a default
// // response

let name =await inquirer.prompt([
    {
        type:"string",
        name:"name",
        message:"Enter your name"
    }
])
let userGuessedName;
switch(name.name){
    case "taha":
        case "ali":
            case "aziz":
                userGuessedName = "you are my friend";
                break;
                default:userGuessedName=(`you are not my friend`)
}console.log(userGuessedName);


// // Functions:
// // • Set up two different variables with different values.
// // • Call a function with these variables as arguments and output the result using console.log.
// // • Create a second call to the function with two more numbers as arguments.


let num1 =7
let num2 =8
function Numbre(Number1:number,Number2:number){
    let sum =Number1 + Number2
    return sum
}
console.log(Numbre(num1,num2));
console.log(Numbre(5,6));



// 3.Calculator project using function:
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the
// corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments.


let num0=10;
let num3 =20
let operator ="+"
function Calculator(num1:number,num2:number,operator:string){
switch(operator){
    case "-":
        return num1 - num2;
        break;
        case "+":
        return num1 + num2;
        break;
         
        default:
            return "invalid operator"
            break;
}
}
console.log(Calculator(num1,num2,operator))
console.log(Calculator(1,3,"*"));



// 4.Anonymous functions:
// • Assign a function expression to a variable, with one parameter that outputs the provided
// argument to the console.
// • Pass an argument into the function.
// • Create the same function as a normal function declaration.


let  AnonymousFunction = function(Name:string){

    console.log(Name)
    }
    
    AnonymousFunction("Hello World")
    