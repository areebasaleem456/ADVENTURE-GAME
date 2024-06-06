#! /usr/bin/env node

console.log("=".repeat(90))
console.log("\n\t Welcome to codewith Areeba Adventure Game\n")
console.log("=".repeat(90))
console.log("\n\tADVENTURE GAME\n")
console.log("=".repeat(90))
import inquirer from "inquirer"

class Player{
    name:string;
    fuel:number = 100;
    constructor(name:string){
           this.name=name        
    }
    fuelDecrease(){
        let fuel =this.fuel -25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
}    
class Opponent{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name=name
    }
    fuelDecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
}
let player_name=await inquirer.prompt([
    {
        name:"name",
        type:"input",
        message:"Enter Your Name:"
    }
])
let opponent_name=await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message:"Select An Opponent:",
        choices:["Tooba","Sara","Hiba"]
    }
])
let p1=new Player(player_name.name)
let o1=new Opponent(opponent_name.select)

do{
    if(opponent_name.select=="Tooba"){
        let ask =await inquirer.prompt([
            {
                name:"option",
                type:"list",
                message:"What you want to do?",
                choices:["Attack","Energy Drink","Run"]
            }
        ])
        if(ask.option == "Attack"){
            let num = Math.floor(Math.random()*2)
         if(num>0){
            p1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`)
            console.log(`${o1.name} fuel is ${o1.fuel}`)
         if(p1.fuel<=0){
            console.log(`${p1.name} You Loose!`)
            process.exit()
         }
         } 
         if(num<=0){
            o1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`)
            console.log(`${o1.name} fuel is ${o1.fuel}`)

         if(o1.fuel<=0){
            console.log(`${o1.name} You Loose1`)
            process.exit()
            }
           }
        }    
        if(ask.option =="Energy Drink"){
            p1.fuelIncrease()
            console.log(`Now,Your fuel is ${p1.fuel}`)
            process.exit()
        }
        if(ask.option =="Run"){
            console.log("You Exit! GAME OVER.")
            process.exit()
        }
    }
    if(opponent_name.select=="Sara"){
        let ask =await inquirer.prompt([
            {
                name:"option",
                type:"list",
                message:"What you want to do?",
                choices:["Attack","Energy Drink","Run"]
            }
        ])
        if(ask.option == "Attack"){
            let num = Math.floor(Math.random()*2)
         if(num>0){
            p1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`)
            console.log(`${o1.name} fuel is ${o1.fuel}`)
         if(p1.fuel<=0){
            console.log(`${p1.name} You Loose!`)
            process.exit()
         }
         } 
         if(num<=0){
            o1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`)
            console.log(`${o1.name} fuel is ${o1.fuel}`)

         if(o1.fuel<=0){
            console.log(`${o1.name} You Loose1`)
            process.exit()
            }
           }
        }    
        if(ask.option =="Energy Drink"){
            p1.fuelIncrease()
            console.log(`Now,Your fuel is ${p1.fuel}`)
            process.exit()
        }
        if(ask.option =="Run"){
            console.log("You Exit! GAME OVER.")
            process.exit()
        }
    }

    // HIBA

    if(opponent_name.select=="Hiba"){
        let ask =await inquirer.prompt([
            {
                name:"option",
                type:"list",
                message:"What you want to do?",
                choices:["Attack","Energy Drink","Run"]
            }
        ])
        if(ask.option == "Attack"){
            let num = Math.floor(Math.random()*2)
         if(num>0){
            p1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`)
            console.log(`${o1.name} fuel is ${o1.fuel}`)
         if(p1.fuel<=0){
            console.log(`${p1.name} You Loose!`)
            process.exit()
         }
         } 
         if(num<=0){
            o1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`)
            console.log(`${o1.name} fuel is ${o1.fuel}`)

         if(o1.fuel<=0){
            console.log(`${o1.name} You Loose1`)
            process.exit()
            }
           }
        }    
        if(ask.option =="Energy Drink"){
            p1.fuelIncrease()
            console.log(`Now,Your fuel is ${p1.fuel}`)
            process.exit()
        }
        if(ask.option =="Run"){
            console.log("You Exit! GAME OVER.")
            process.exit()
        }
    }
      
    
}

while(true);