#! /usr/bin/env node

import chalk from "chalk";
import { log } from "console";
import inquirer from "inquirer";

let myBalance = 40000;
let myPin = 3344;

let pinAnswer = await  inquirer.prompt({
    name: "pincode",
    type: "number",
    message: "Enter Your Pin"
})

if (pinAnswer.pincode === myPin){
    console.log("Correct Pin Code!!!");

    let operationAns = await inquirer.prompt([{
        name: "operation",
        message: "Please Select Option",
        type: "list",
        choices: ["withdraw" , "check balance" ,]
    }]);

console.log(operationAns);

   if (operationAns.operation === "withdraw"){
    let amountAns = await inquirer.prompt([{
     name: "amount",
     message: "Enter Your Amount",
     type: "number"
    }]);
   
   myBalance -= amountAns.amount;

   console.log("your remaining balance is: " + myBalance)
    
   } else if (operationAns.operation === "check balance"){
    console.log("Your balance is: " + myBalance);
   }
   
}

   

 else {
    console.log("Incorrect Pin Number"); 
}






















// import inquirer from "inquirer"

// let myblance= 1000;
// let mypin= 44537;

// const atm=await inquirer.prompt(
//     [
        
//         {name:"pin",
//         message:"enter your pin",
//         type:"number"
//         }


//     ]

//     );
//     if (atm.pin==="mypin"){
//         console.log("correct pin code!!!");
        
//     };
//     let operationans=await inquirer.prompt
//     (
//         [
//         {name:"operation",
//         message:"please select option",
//         type:'list',
//         choices:["withdraw","checkblance"]

//         }
//     ]

//     );
//     console.log(operationans);
//     if(operationans.operation==="withdraw"){
//        let amountans=await inquirer.prompt([{
//         name:"operation",
    
//         Message:"please select option",
//         type:"list",
//         choices:["withdraw","checkblance"]
        
//        }])

    // }
    // // console.log(operationans);

    // if(operationans.operation==="withdraw"){
    //     let amountans= await inquirer.prompt(
    //         [
    //             {name:"amount",
    
    //             Message:"enter your amount",
    //             type:"list",
    //             choices:["withdraw","checkblance","insufficint blance"]
                    
    //             }
    //         ]
    //     )
    // }
    
    // // console.log(operationans);
    // if(operationans==="withdraw"){

    // }else{
    //     console.log("incorrect pin number");
        
    // }


    
    
