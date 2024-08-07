"use strict";
//TASK 2
//let personName:string="Eric"
//console.log(`Hello ${personName}, would you like to learn some python today?`);
//TASK 3
//let personName:string="Fazeela Ansari";
//in lowercase
//console.log("lowerCase:",personName.toLowerCase());
//in uppercase
//console.log("UpperCase:",personName.toUpperCase());
//in titllecase
//console.log("tittlecase:",personName.replace(/\b\w/g,c=>c.toUpperCase()));
//TASK 4
//let qoute:string="A person who never made a mistake never tried new thing.";
//let author:string="Albert Einstein";
//console.log(`${author} once said, ${qoute}`);
//TASK 5
/*let famous_person :string="Albert Einstein";
let qoute:string="A person who never made a mistake never tried new thing.";
let message:string=`${famous_person} once said, "${qoute}"`;
console.log(message);*/
//TASK 6
/*let personName:string="\t\nfazeela ansari\n\t";
console.log("original:", personName);
console.log("stripped:", personName.trim());*/
//TASK 7 , 8
/*console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);*/
//TASK 9
//&let favouriteNumber:number= 4;
//console.log(`My favourite number is ${favouriteNumber}.`);
//TASK 10
//author:[Fzeela Ansari]
//date:[ Monday,10 june,2024]
//TASK 9:printing my favourite number.
//let favouriteNumber:number=4;
//console.log(`My favourite number is ${favouriteNumber}.`);
//TASK 11
/*let names:string[]=["Ali","Haseeb","Hamza","Umer"]
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);*/
function createCar(manufacture, model, optional) {
    return {
        manufacture,
        model,
        ...optional
    };
}
let mycar = createCar("toyota", "corolla", { color: "silver", year: "2024" });
console.log(mycar);
